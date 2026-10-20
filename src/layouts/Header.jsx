/* eslint-disable react/prop-types */
import Form from '../forms/NewsletterForm.jsx'

function Header({ isVisible, currentPath }) {
    const onBackClick = () => {
        window.history.back()
    }
    return (
        <header className="grid-layout condensed-grid condensed-grid--secondary">
            <div className="grid-item span-2">
                <a href="/" className="logo-link" aria-label="printer_scanner home">
                    <h1 className="logo">
                        <span className="logo-default" aria-hidden="true">printer_scanner</span>
                        <span className="logo-hover" aria-hidden="true">scanner_printer</span>
                        <span className="visually-hidden">printer_scanner</span>
                    </h1>
                </a>
            </div>

            <div className="grid-item hidden-mobile"></div>
            <div className="grid-item hidden-mobile"></div>

            <div className="grid-item grid-item--link">
                <Form />
            </div>
            <a className="grid-item nav-cell" href="/contact">
                    Contact
                </a>

            <div className="grid-item grid-item--link">
                {currentPath != '/' && !isVisible && (
                    <button onClick={onBackClick} className="home-button">
                        <u>←</u>
                    </button>
                )}
            </div>

            <div className="grid-item span-2 text">
                <p>Extremely famous graphic designer.</p>
            </div>

            <a className="grid-item nav-cell" href="/about">
                    About
                </a>

            <div className="grid-item hidden-mobile"></div>
            <div className="grid-item hidden-mobile"></div>

            <a className="grid-item nav-cell" href="https://github.com/printerscanner">
                    Github
                </a>
            <a className="grid-item nav-cell" href="https://www.are.na/printer-scanner">
                    Are.na
                </a>
            <a className="grid-item nav-cell" href="https://instagram.com/printer_scanner">
                    Instagram
                </a>
            <a className="grid-item nav-cell" href="https://x.com/abbbbbbeyyyyyyy">
                    X
                </a>

            <a className="grid-item nav-cell" href="https://mother-type.de">
                    ↗ Mother Type
                </a>
            <a className="grid-item nav-cell" href="https://earthly-delights.net">
                    ↗ Earthly Delights
                </a>
        </header>
    )
}

export default Header
