import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { clampPaddle, createGame, launchBall, stepGame } from './pong-engine.js'
import './pong.css'

const WIN_MESSAGE =
    "Wow, I can't belive you won. Was that a good use of your time? Why don't you send me an email instead."

// The footer owns the original cells; this optional component only adds gameplay.
// eslint-disable-next-line react/prop-types
function FooterPongGame({ blockFieldRef }) {
    const ballRef = useRef(null)
    const paddleRef = useRef(null)
    const dropsRef = useRef(null)
    const restartRef = useRef(() => {})
    const [lives, setLives] = useState(3)
    const [started, setStarted] = useState(false)

    useEffect(() => {
        if (
            !import.meta.env.DEV ||
            new URLSearchParams(window.location.search).get('pong-preview') !==
                'win'
        )
            return
        const timer = window.setTimeout(() => window.alert(WIN_MESSAGE), 300)
        return () => window.clearTimeout(timer)
    }, [])

    useEffect(() => {
        const stage = blockFieldRef.current
        const paddle = document.createElement('div')
        paddle.className = 'pong-paddle'
        paddle.setAttribute('aria-hidden', 'true')
        stage.appendChild(paddle)
        paddleRef.current = paddle
        const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
        let game = createGame()
        let active = false
        let winAnnounced = false
        let targets = []
        const input = { left: false, right: false, engaged: false }
        const originalVisibility = new Map()
        const originalDamage = new Map()
        const hadNoSelect = stage.classList.contains('pong-no-select')
        stage.classList.add('pong-no-select')
        const dropElements = new Map()
        let frame = 0
        let previous = 0
        let lastScore = -1
        let lastLives = -1
        const attributes = ['tabindex', 'role', 'aria-label', 'data-pong-field']
        const originalAttributes = attributes.map((name) => [
            name,
            stage.getAttribute(name),
        ])
        stage.setAttribute('data-pong-field', '')
        stage.setAttribute('tabindex', '0')
        stage.setAttribute('role', 'group')
        stage.setAttribute(
            'aria-label',
            'Click or press Space to launch each ball. Clear the website blocks. Move your pointer or use left and right arrow keys. Catch arrows for a wider paddle, or a clock to slow the ball.'
        )

        const paint = () => {
            game.paddleY =
                window.scrollY + paddleRef.current.getBoundingClientRect().top
            if (game.waiting && !game.over) {
                game.x = game.paddle
                game.y = game.paddleY - 8
            }
            ballRef.current.style.left = `${game.x}px`
            ballRef.current.style.top = `${game.y - window.scrollY}px`
            ballRef.current.style.visibility =
                game.over || !active ? 'hidden' : 'visible'
            paddleRef.current.style.visibility = 'visible'
            paddleRef.current.style.left = `${game.paddle - stage.getBoundingClientRect().left}px`
            paddleRef.current.style.width = `${game.paddleWidth}px`
            if (lastScore !== game.hits) {
                targets.forEach((block, i) => {
                    block.style.visibility = game.blocks[i]
                        ? originalVisibility.get(block)
                        : 'hidden'
                    if (game.damage[i] && game.blocks[i])
                        block.setAttribute('data-pong-damaged', '')
                    else if (originalDamage.get(block) === null)
                        block.removeAttribute('data-pong-damaged')
                    else
                        block.setAttribute(
                            'data-pong-damaged',
                            originalDamage.get(block)
                        )
                })
                lastScore = game.hits
            }
            if (lastLives !== game.lives) {
                setLives(game.lives)
                lastLives = game.lives
            }
            const ids = new Set(game.drops.map((drop) => drop.id))
            for (const [id, element] of dropElements) {
                if (!ids.has(id)) {
                    element.remove()
                    dropElements.delete(id)
                }
            }
            for (const drop of game.drops) {
                let element = dropElements.get(drop.id)
                if (!element) {
                    element = document.createElement('span')
                    element.className = 'pong-drop'
                    element.textContent = drop.type === 'wide' ? '↔' : '◷'
                    dropsRef.current.appendChild(element)
                    dropElements.set(drop.id, element)
                }
                element.style.left = `${drop.x}px`
                element.style.top = `${drop.y - window.scrollY}px`
            }
        }
        const measure = () => {
            if (!stage.getBoundingClientRect().width) return
            const width = document.documentElement.clientWidth
            const height = document.documentElement.scrollHeight
            const nextTargets = Array.from(
                document.querySelectorAll('.grid-item')
            ).filter((element) => {
                const rect = element.getBoundingClientRect()
                return rect.width > 0 && rect.height > 0
            })
            const destroyed = new Set(targets.filter((_, i) => !game.blocks[i]))
            const damageByElement = new Map(
                targets.map((element, i) => [element, game.damage[i]])
            )
            targets = nextTargets
            const rects = targets.map((block) => {
                if (!originalVisibility.has(block)) {
                    originalVisibility.set(block, block.style.visibility)
                    originalDamage.set(
                        block,
                        block.getAttribute('data-pong-damaged')
                    )
                }
                const b = block.getBoundingClientRect()
                return {
                    x: b.left + window.scrollX,
                    y: b.top + window.scrollY,
                    width: b.width,
                    height: b.height,
                }
            })
            const blocks = targets.map((block) => !destroyed.has(block))
            game = {
                ...game,
                width,
                height,
                rects,
                blocks,
                damage: targets.map((block) => damageByElement.get(block) || 0),
                cleared: blocks.filter((alive) => !alive).length,
                paddleY: height - 24,
                x: Math.min(game.x, width - 5),
                y: Math.min(game.y, height - 48),
                paddle: clampPaddle(game.paddle, width, game.paddleWidth),
            }
            if (!active) {
                game.x = width / 2
                game.y = height - 48
                game.paddle = width / 2
            }
            lastScore = -1
            previous = 0
            paint()
        }
        restartRef.current = () => {
            originalVisibility.forEach((value, element) => {
                element.style.visibility = value
            })
            game = createGame(game.width, game.height, game.rects)
            winAnnounced = false
            input.left = false
            input.right = false
            input.engaged = true
            active = true
            setStarted(true)
            lastScore = -1
            previous = 0
            paint()
            measure()
        }
        const tick = (now) => {
            if (
                active &&
                !game.over &&
                stage.getBoundingClientRect().width > 0 &&
                !document.hidden &&
                (!motion.matches || input.engaged)
            ) {
                let remaining = previous
                    ? Math.min((now - previous) / 1000, 0.05)
                    : 0
                while (remaining > 0 && !game.over) {
                    const dt = Math.min(remaining, 1 / 240, 3 / game.speed)
                    if (input.left || input.right)
                        game.paddle = clampPaddle(
                            game.paddle +
                                (Number(input.right) - Number(input.left)) *
                                    480 *
                                    dt,
                            game.width,
                            game.paddleWidth
                        )
                    stepGame(game, dt)
                    if (
                        game.blocks.length > 0 &&
                        game.cleared === game.blocks.length
                    ) {
                        game.over = true
                        game.drops = []
                    }
                    remaining -= dt
                }
                paint()
                if (
                    !winAnnounced &&
                    game.blocks.length > 0 &&
                    game.cleared === game.blocks.length
                ) {
                    winAnnounced = true
                    window.alert(WIN_MESSAGE)
                }
                previous = now
            } else previous = 0
            frame = requestAnimationFrame(tick)
        }
        const movePaddle = (event) => {
            game.paddle = clampPaddle(
                event.clientX,
                game.width,
                game.paddleWidth
            )
            input.engaged = true
            paint()
        }
        const release = () => {
            input.engaged = false
            input.left = false
            input.right = false
        }
        const down = (event) => {
            event.preventDefault()
            stage.focus({ preventScroll: true })
            stage.setPointerCapture(event.pointerId)
            movePaddle(event)
        }
        const up = (event) => {
            if (stage.hasPointerCapture(event.pointerId))
                stage.releasePointerCapture(event.pointerId)
            if (event.pointerType !== 'mouse') release()
        }
        const launch = () => {
            if (!active) {
                active = true
                setStarted(true)
            }
            input.engaged = true
            launchBall(game)
            previous = 0
            paint()
        }
        const handleKey = (event, pressed) => {
            if (event.key === ' ' || event.key === 'Enter') {
                event.preventDefault()
                if (pressed && !event.repeat) launch()
                return
            }
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
            event.preventDefault()
            input[event.key === 'ArrowLeft' ? 'left' : 'right'] = pressed
            input.engaged = true
        }
        const handlers = {
            click: launch,
            selectstart: (event) => event.preventDefault(),
            pointermove: movePaddle,
            pointerdown: down,
            pointerup: up,
            pointercancel: release,
            pointerleave: release,
            blur: release,
            keydown: (event) => handleKey(event, true),
            keyup: (event) => handleKey(event, false),
        }
        Object.entries(handlers).forEach(([name, handler]) =>
            stage.addEventListener(name, handler)
        )
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
                    active = true
                    setStarted(true)
                }
                previous = 0
            },
            { threshold: 0.75 }
        )
        observer.observe(stage)
        const resize = new ResizeObserver(measure)
        resize.observe(document.body)
        const followMouse = (event) => {
            if (event.pointerType === 'mouse') movePaddle(event)
        }
        window.addEventListener('pointermove', followMouse, { passive: true })
        window.addEventListener('resize', paint)
        window.addEventListener('blur', release)
        window.addEventListener('scroll', paint, { passive: true })
        measure()
        frame = requestAnimationFrame(tick)
        return () => {
            cancelAnimationFrame(frame)
            paddle.remove()
            paddleRef.current = null
            observer.disconnect()
            resize.disconnect()
            window.removeEventListener('resize', paint)
            window.removeEventListener('blur', release)
            window.removeEventListener('scroll', paint)
            Object.entries(handlers).forEach(([name, handler]) =>
                stage.removeEventListener(name, handler)
            )
            originalVisibility.forEach((value, element) => {
                element.style.visibility = value
            })
            originalDamage.forEach((value, element) => {
                if (value === null) element.removeAttribute('data-pong-damaged')
                else element.setAttribute('data-pong-damaged', value)
            })
            if (!hadNoSelect) stage.classList.remove('pong-no-select')
            originalAttributes.forEach(([name, value]) => {
                if (value === null) stage.removeAttribute(name)
                else stage.setAttribute(name, value)
            })
            dropElements.forEach((element) => element.remove())
            restartRef.current = () => {}
        }
    }, [blockFieldRef])

    return createPortal(
        <>
            <div className="pong-overlay" aria-hidden="true">
                <div className="pong-ball" ref={ballRef} />
                <div ref={dropsRef} />
            </div>
            {started && (
                <div className="pong-controls">
                    <span role="status" aria-label={`${lives} tries remaining`}>
                        <span aria-hidden="true">
                            {'●'.repeat(lives)}
                            {'○'.repeat(3 - lives)}
                        </span>
                    </span>
                    <button
                        type="button"
                        title="Try again"
                        aria-label="Try again — restore blocks and reset game"
                        onClick={() => restartRef.current()}
                    >
                        <span aria-hidden="true">↻</span>
                    </button>
                </div>
            )}
        </>,
        document.body
    )
}

const DESKTOP_PONG = '(min-width: 801px) and (hover: hover) and (pointer: fine)'

// Mount gameplay only on desktop; resizing to mobile also restores cleared cells.
// eslint-disable-next-line react/prop-types
function FooterPong({ blockFieldRef }) {
    const [enabled, setEnabled] = useState(() => window.matchMedia(DESKTOP_PONG).matches)
    useEffect(() => {
        const media = window.matchMedia(DESKTOP_PONG)
        const update = () => setEnabled(media.matches)
        media.addEventListener('change', update)
        update()
        return () => media.removeEventListener('change', update)
    }, [])
    return enabled ? <FooterPongGame blockFieldRef={blockFieldRef} /> : null
}

export default FooterPong
