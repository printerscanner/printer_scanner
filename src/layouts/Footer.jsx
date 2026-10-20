import { useRef } from 'react'
import FooterPong from '../games/pong/FooterPong.jsx'

function Footer() {
    const blockFieldRef = useRef(null)
    return (
        <footer>
            <div className="grid-layout condensed-grid">
                <div className="grid-item span-2">
                    <a href="/" className="logo-link" aria-label="printer_scanner home">
                        <h1 className="logo">
                        <span className="logo-default" aria-hidden="true">printer_scanner</span>
                        <span className="logo-hover" aria-hidden="true">scanner_printer</span>
                        <span className="visually-hidden">printer_scanner</span>
                    </h1>
                    </a>
                </div>

                <div className="grid-item overview">
                    <b>Email Me</b>
                    <p>itsprinterscanner@gmail.com</p>
                </div>
                <div className="grid-item overview">
                    <b>Office</b>
                    <p>Urbanstraße 71, 10967 Berlin</p>
                </div>
                {/* <div className="grid-item"></div> */}
                {/* <div className="grid-item"></div> */}
                <div className="grid-item grid-item--link"></div>
                <a className="grid-item nav-cell" href="/colophon">
                    Colophon
                </a>
            </div>
            <div className="grid-layout condensed-grid" ref={blockFieldRef}>
                {Array.from({ length: 54 }, (_, index) => (
                    <div className="grid-item hidden-large" key={index} aria-hidden="true" />
                ))}
            </div>
            {/* Remove this component and its import to disable Pong; the cells remain. */}
            <FooterPong blockFieldRef={blockFieldRef} />
        </footer>
    )
}

export default Footer
