import { Helmet } from 'react-helmet';


function Capabilities() {
  return (
    <div>
    <h1 className='visually-hidden'>Colophon</h1>
      <Helmet>
        <title>Colophon</title>
        <meta name="description" content="This website was designed and developed by printer_scanner. It is typeset using Neue Montreal by The Pangram Pangram🅐 Foundry" />
      </Helmet>
      <div className="grid-layout">
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item span-most text xl-grid">
        <p>This website was designed and developed by printer_scanner. It is typeset using Neue Montreal by <a href="">The Pangram Pangram🅐 Foundry</a>.</p>
        </div>
        <div className="grid-item hidden-mobile span-2"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile span-2"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile span-2"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile"></div>
        <div className="grid-item hidden-mobile span-2"></div>
        <div className="grid-item hidden-mobile"></div>
      </div>
    </div>
  );
}

export default Capabilities;
