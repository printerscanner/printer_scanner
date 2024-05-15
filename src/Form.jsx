import { useState } from 'react';

function Form() {
  const [showThanks, setShowThanks] = useState(false);
  const [thanksMessage, setThanksMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        // Example success message
        setThanksMessage("You're a little freak 😉, thanks for joining.");
      } else {
        // Example error message
        setThanksMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      // Example error message
      setThanksMessage("Oops! Something went wrong. Please try again later.");
    }

    setShowThanks(true);
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  return (
    <div>
      <form name="contact" data-netlify="true" className="form" method="POST" onSubmit={handleSubmit}>
        <input type="email" name="email" className="email" placeholder="Get The Newsletter" />
        <button type="submit">→</button>
      </form>

      {showThanks && (
        <div className="thanks-bubble">
          <p>{thanksMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
