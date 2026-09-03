import ContactForm from '../forms/ContactForm.jsx'
import { Helmet } from 'react-helmet'

function Archive() {
    return (
        <div>
            <h1 className="visually-hidden">Contact</h1>
            <Helmet>
                <title>Contact</title>
                <meta name="description" content="Get in touch" />
            </Helmet>
            <ContactForm />
        </div>
    )
}

export default Archive
