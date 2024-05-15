import { useState } from "react";

function Form() {
  const [showThanks, setShowThanks] = useState(false);
  const [thanksMessage, setThanksMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowThanks(true);

    try {
      // Your form submission logic goes here
      // ...

      // Example success message
      setThanksMessage("You're a little freak 😉, thanks for joining.");
    } catch (error) {
      // Example error message
      setThanksMessage("Oops! Something went wrong. Please try again later.");
    }

    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };
  return (
    <>
    <form 
    name="contact" 
    method="POST" 
    data-netlify="true" 
    className="form"
    onSubmit={handleSubmit}
   >
  <input type="hidden" name="form-name" value="contact" />
     <input id="standard-basic" label="email" name="email" className="email" placeholder="Get the Newsletter" />
     <button type="submit">→</button>
    </form>
      {showThanks && (
        <div className="thanks-bubble">
          <p>{thanksMessage}</p>
        </div>
      )}
      </>
  );
}

export default Form;
