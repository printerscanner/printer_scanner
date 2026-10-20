export const PADDLE_WIDTH = 52
const INITIAL_SPEED = 200
const SPEED_PER_BLOCK = 4
export const RADIUS = 5
export const clampPaddle = (x, width, paddleWidth = PADDLE_WIDTH) => Math.max(paddleWidth / 2, Math.min(width - paddleWidth / 2, x))

export const createGame = (width = 600, height = 420, rects = []) => ({
    width, height, rects, paddleY: height - 24,
    x: width / 2, y: height - 48,
    vx: INITIAL_SPEED / Math.sqrt(5), vy: -2 * INITIAL_SPEED / Math.sqrt(5), speed: INITIAL_SPEED, paddle: width / 2,
    paddleWidth: PADDLE_WIDTH, wideFor: 0,
    blocks: Array(rects.length).fill(true), damage: Array(rects.length).fill(0), hits: 0, cleared: 0,
    lives: 3, over: false, waiting: true, drops: [], nextDropId: 0,
})

export function launchBall(game) {
    if (game.over || !game.waiting) return
    game.x = game.paddle
    game.y = game.paddleY - RADIUS - 3
    game.vx = game.speed / Math.sqrt(5)
    game.vy = -2 * game.speed / Math.sqrt(5)
    game.waiting = false
}

function setSpeed(game, speed) {
    const ratio = speed / Math.hypot(game.vx, game.vy)
    game.vx *= ratio
    game.vy *= ratio
    game.speed = speed
}

export function stepGame(game, dt, random = Math.random) {
    if (game.over) return
    if (game.waiting) {
        game.x = game.paddle
        game.y = game.paddleY - RADIUS - 3
        return
    }
    if (game.wideFor > 0) {
        game.wideFor = Math.max(0, game.wideFor - dt)
        if (game.wideFor === 0) game.paddleWidth = PADDLE_WIDTH
    }
    for (const drop of game.drops) {
        const oldY = drop.y
        drop.y += 140 * dt
        if (oldY <= game.paddleY && drop.y >= game.paddleY && Math.abs(drop.x - game.paddle) <= game.paddleWidth / 2 + 10) {
            if (drop.type === 'wide') { game.paddleWidth = 112; game.wideFor = 20 }
            else setSpeed(game, Math.max(160, game.speed * 0.75))
            drop.caught = true
        }
    }
    game.drops = game.drops.filter((drop) => !drop.caught && drop.y < game.paddleY + 40)
    game.paddle = clampPaddle(game.paddle, game.width, game.paddleWidth)

    const oldX = game.x
    const oldY = game.y
    game.x += game.vx * dt
    game.y += game.vy * dt
    if (game.x < RADIUS) { game.x = RADIUS; game.vx = Math.abs(game.vx) }
    if (game.x > game.width - RADIUS) { game.x = game.width - RADIUS; game.vx = -Math.abs(game.vx) }
    if (game.y < RADIUS) { game.y = RADIUS; game.vy = Math.abs(game.vy) }
    if (game.vy > 0 && oldY + RADIUS <= game.paddleY && game.y + RADIUS >= game.paddleY &&
        Math.abs(game.x - game.paddle) <= game.paddleWidth / 2 + RADIUS) {
        const offset = Math.max(-1, Math.min(1, (game.x - game.paddle) / (game.paddleWidth / 2)))
        const angle = offset * Math.PI / 3
        game.vx = game.speed * Math.sin(angle)
        game.vy = -game.speed * Math.cos(angle)
        game.y = game.paddleY - RADIUS
    }
    for (let i = 0; i < game.blocks.length; i++) {
        if (!game.blocks[i]) continue
        const b = game.rects[i]
        if (game.x + RADIUS < b.x || game.x - RADIUS > b.x + b.width ||
            game.y + RADIUS < b.y || game.y - RADIUS > b.y + b.height) continue
        game.hits++
        const destroyed = game.damage[i] === 1
        if (destroyed) {
            game.blocks[i] = false
            game.cleared++
        } else game.damage[i] = 1
        if (oldY - RADIUS >= b.y + b.height || oldY + RADIUS <= b.y) {
            game.vy *= -1
            game.y = oldY
        } else {
            game.vx *= -1
            game.x = oldX
        }
        if (destroyed) setSpeed(game, game.speed + SPEED_PER_BLOCK)
        if (destroyed && game.nextDropId < 3 && random() < 0.08) {
            game.drops.push({ id: game.nextDropId++, x: b.x + b.width / 2, y: b.y + b.height / 2, type: random() < 0.5 ? 'wide' : 'slow' })
        }
        break
    }
    if (game.y > game.paddleY + 24 + RADIUS) {
        game.lives--
        if (game.lives === 0) { game.over = true; game.drops = []; return }
        game.waiting = true
        game.drops = []
        game.x = game.paddle
        game.y = game.paddleY - RADIUS - 3
        game.vx = game.speed / Math.sqrt(5)
        game.vy = -2 * game.speed / Math.sqrt(5)
    }
}
