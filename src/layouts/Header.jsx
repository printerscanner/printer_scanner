/* eslint-disable react/prop-types */
import Form from "../forms/NewsletterForm.jsx";

function Header({ isVisible, currentPath }) {
  const onBackClick = () => {
    window.history.back();
  };
  return (
    <header className="grid-layout condensed-grid condensed-grid--secondary">
      <div className="grid-item span-2"><a href="/"><h1 className="logo">printer_scanner</h1></a></div>

      <div className="grid-item hidden-mobile"></div>
      <div className="grid-item hidden-mobile"></div>

      <div className="grid-item grid-item--link">
        <Form />
      </div>
      <div className="grid-item grid-item--link">
        <a className="menu-link right" href="/contact">Get in Touch</a>
      </div>

      <div className="grid-item grid-item--link">
          {currentPath != "/" && !isVisible && <button onClick={onBackClick} className="home-button"><u>←</u></button>}
      </div>

      <div className="grid-item span-2 text">
      {currentPath != "/archive" && 
        <p>Berlin-based independent designer and technologist.</p>
      }
      {currentPath == "/archive" && 
        <p>Oddities, Personal Projects, Experiments and more.</p>
      }
      </div>


      <div className="grid-item grid-item--link hidden-mobile">
        <a className="menu-link right" href="/capabilities">Capabilities</a>
      </div>

      {/* <div className="grid-item grid-item--link"><a className="menu-link" href="/archive">Archive</a></div> */}
      <div className="grid-item hidden-mobile"></div>
      <div className="grid-item hidden-mobile"></div>



      <div className="grid-item">
        <a className="menu-link" href="https://github.com/printerscanner">Github</a>
      </div>
      <div className="grid-item">
        <a className="menu-link" href="https://www.are.na/printer-scanner-studio">Are.na</a>
      </div>
      <div className="grid-item">
        <a className="right menu-link" href="https://instagram.com/printer_scanner">Instagram</a>
      </div>
      <div className="grid-item hidden-mobile"></div>

      <div className="grid-item"><a className="menu-link" href="https://mother-type.de">↗ Mother Type</a></div>
      <div className="grid-item">
        <a className="menu-link" href="https://earthly-delights.net">↗ Earthly Delights</a>
      </div>
    </header>
  );
}

export default Header;
