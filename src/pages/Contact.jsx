import ContactForm from '../forms/ContactForm.jsx';
import { Helmet } from 'react-helmet';


function Archive() {
  return (
    <div>
      <h1 className='visually-hidden'>Contact</h1>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="This website was designed and developed by printer_scanner. It is typeset using Neue Montreal by The Pangram Pangram🅐 Foundry" />
      </Helmet>
      <ContactForm />
    </div>
  );
}

export default Archive;
