/* eslint-disable react/prop-types */
import Form from '../forms/NewsletterForm.jsx'

function Header({ isVisible, currentPath }) {
    const onBackClick = () => {
        window.history.back()
    }
    return (
        <header className="grid-layout condensed-grid condensed-grid--secondary">
            <div className="grid-item span-2">
                <a
                    href="/"
                    className="logo-link"
                    aria-label="printer_scanner home"
                >
                    <h1 className="logo">printer_scanner</h1>
                </a>
            </div>

            <div
                className="grid-item span-2 hidden-mobile"
                aria-hidden="true"
            ></div>

            <a className="grid-item nav-cell" href="/about">
                About
            </a>

            <a className="grid-item nav-cell" href="/contact">
                Contact
            </a>

            {currentPath != '/' && !isVisible ? (
                <button
                    type="button"
                    onClick={onBackClick}
                    className="grid-item nav-cell nav-back"
                    aria-label="Go back"
                >
                    <span aria-hidden="true">←</span>
                </button>
            ) : (
                <div className="grid-item grid-item--link"></div>
            )}

            <div className="grid-item span-2 text">
                <p>Extremely famous graphic designer.</p>
            </div>
            <div className="grid-item hidden-mobile" aria-hidden="true"></div>
            <div className="grid-item span-2 grid-item--link">
                <Form />
            </div>
            <a
                className="grid-item nav-cell"
                href="https://github.com/printerscanner"
            >
                Github
            </a>
            <a
                className="grid-item nav-cell"
                href="https://www.are.na/printer-scanner"
            >
                Are.na
            </a>
            <a
                className="grid-item nav-cell"
                href="https://instagram.com/printer_scanner"
            >
                Instagram
            </a>
            <a
                className="grid-item nav-cell"
                href="https://x.com/abbbbbbeyyyyyyy"
            >
                X
            </a>
            <div
                className="grid-item span-2 hidden-mobile"
                aria-hidden="true"
            ></div>
        </header>
    )
}

export default Header
