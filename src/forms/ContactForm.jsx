import { useState } from 'react'
import '../css/form.css'

function ContactForm() {
    const [status, setStatus] = useState('')
    const [sending, setSending] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (sending) return
        const form = event.currentTarget
        const values = new FormData(form)
        setSending(true)
        setStatus('')
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(values).toString(),
            })
            if (!response.ok) throw new Error('Submission failed')
            form.reset()
            setStatus('Thanks for your message. I’ll get back to you soon.')
        } catch {
            setStatus('Your message couldn’t be sent. Please try again or email itsprinterscanner@gmail.com.')
        } finally {
            setSending(false)
        }
    }

    return (
        <form name="submission" method="POST" data-netlify="true"
            className="contact-form" onSubmit={handleSubmit} aria-busy={sending}>
            <input type="hidden" name="form-name" value="submission" />
            <h2 className="grid-item contact-title">Get in touch</h2>
            {Array.from({ length: 5 }, (_, index) => (
                <div className="grid-item contact-heading-spacer" key={index} aria-hidden="true" />
            ))}
            <label className="grid-item contact-label" htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name"
                required className="grid-item contact-input" placeholder="Elizabeth Holmes" />
            <label className="grid-item contact-label" htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" autoComplete="email"
                required className="grid-item contact-input" placeholder="lizzie@theranos.com" />
            <label className="grid-item contact-label" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" required rows={6}
                className="grid-item contact-input" placeholder="What’s on your mind?" />
            <div className="grid-item contact-submit-spacer" aria-hidden="true" />
            <button type="submit" className="grid-item contact-submit" disabled={sending}>
                <span>{sending ? 'Sending…' : 'Submit'}</span><span aria-hidden="true">↗</span>
            </button>
            <p className="contact-status" role="status">{status}</p>
        </form>
    )
}

export default ContactForm
