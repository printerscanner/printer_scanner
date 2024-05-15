import Form from "./Form.jsx";

// eslint-disable-next-line react/prop-types
function Header() {
  return (
    <div className="grid-layout condensed-grid condensed-grid--secondary">
			<div className="grid-item span-2"><a href="/"><h1 className="logo">printer_scanner</h1></a></div>
      <div className="grid-item"></div>
      <div className="grid-item"></div>
      <div className="grid-item grid-item--link">
      <Form />
      </div>
			<div className="grid-item grid-item--link">
				<a className="menu-link right" href="mailto:itsprinterscanner@gmail.com">Get in Touch</a>
			</div>

      <div className="grid-item"></div>
      <div className="grid-item"></div>

      <div className="grid-item span-2 text">
        <p>An independent design and technology studio based in Berlin.</p>
      </div>
      <div className="grid-item">
      </div>
      <div className="grid-item">
      </div>
      <div className="grid-item">
        <a className="right menu-link" href="https://instagram.com/printer_scanner">Instagram</a>
      </div>
      <div className="grid-item">
        <a className="menu-link" href="https://www.are.na/printer-scanner">Are.na</a>
      </div>
      <div className="grid-item">
      <a className="menu-link" href="https://github.com/printerscanner">Github</a>
      </div>
      <div className="grid-item">
      </div>
      <div className="grid-item">
      </div>
      <div className="grid-item">
        <a className="menu-link" href="https://earthly-delights.net">↗ Earthly Delights</a>
      </div>

    </div>
  );
}

export default Header;
