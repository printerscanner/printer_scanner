function Form() {
    const handleSubmit = async (e) => {
        let thanksMessage
        e.preventDefault()
        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    'form-name': 'contact',
                    email: e.target.email.value,
                }).toString(),
            })
            if (response.ok) {
                thanksMessage = "You're a little freak 😉, thanks for joining."
                // Reset form fields if needed
                e.target.reset()
            } else {
                thanksMessage = 'Oops! Something went wrong.'
            }
        } catch (error) {
            console.error('Form submission failed:', error)
            thanksMessage = 'Oops! Something went wrong.'
        }
        // Creating a div element to hold the message
        const bubble = document.createElement('div')
        bubble.className = 'thanks-bubble-newsletter'
        bubble.innerHTML = `<p>${thanksMessage}</p>`

        // Appending the bubble to the form
        e.target.appendChild(bubble)

        // Hiding the bubble after 3 seconds
        setTimeout(() => {
            bubble.remove()
        }, 3000)
    }

    return (
        <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="newsletter"
            onSubmit={handleSubmit}
        >
            <input type="hidden" name="form-name" value="contact" />
            <label className="newsletter-label" htmlFor="newsletter-email">
                Want Updates?
            </label>
            <div className="newsletter-control">
                <input
                    id="newsletter-email"
                    type="email"
                    autoComplete="email"
                    name="email"
                    className="newsletter-email"
                    required
                    placeholder="lizzie@theranos.com"
                />
                <button
                    className="newsletter-submit"
                    type="submit"
                    aria-label="Subscribe to the newsletter"
                >
                    <span aria-hidden="true">→</span>
                </button>
            </div>
        </form>
    )
}

export default Form
