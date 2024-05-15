// CSS
import "./index.css";

function Footer() {
  return (
    <footer>
      <div className="grid-layout condensed-grid">

        <div className="grid-item span-2">
          <a className="menu-link" href="https://github.com/printerscanner">
            ↗ Github
          </a>
        </div>
				<div className="grid-item span-2"></div>
				<div className="grid-item"><a className="menu-link" href="https://www.are.na/printer-scanner">Are.na</a></div>
				<div className="grid-item"><a className="right menu-link" href="https://instagram.com/printer_scanner">Instagram</a></div>
    
      </div>
    </footer>
  );
}

export default Footer;
