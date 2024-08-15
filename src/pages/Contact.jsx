import ContactForm from '../forms/ContactForm.jsx';
import { Helmet } from 'react-helmet';


function Archive() {
  return (
    <div>
      <h1 className='visually-hidden'>Contact</h1>
      <Helmet>
        <title>Contact</title>
        <meta name="description" content="Let's work together!" />
      </Helmet>
      <ContactForm />
    </div>
  );
}

export default Archive;
