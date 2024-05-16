import ContactForm from '../forms/ContactForm.jsx';
import { Helmet } from 'react-helmet';


function Archive() {
  return (
    <div>
      <Helmet>
        <title>Colophon</title>
        <meta name="description" content="This website was designed and developed by printer_scanner. It is typeset using Neue Montreal by The Pangram Pangram🅐 Foundry" />
      </Helmet>
      <div className="grid-layout">
      {/* <div className='grid-item'></div> */}
      <div className='grid-item span-all text'><ContactForm /></div>
      {/* <div className='grid-item'></div> */}
    </div>
    </div>
  );
}

export default Archive;
