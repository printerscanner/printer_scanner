// import { useState } from "react";

function Form() {
//   const [showThanks, setShowThanks] = useState(false);
//   const [thanksMessage, setThanksMessage] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setShowThanks(true);

//     try {
//       // Your form submission logic goes here
//       // ...

//       // Example success message
//       setThanksMessage("You're a little freak 😉, thanks for joining.");
//     } catch (error) {
//       // Example error message
//       setThanksMessage("Oops! Something went wrong. Please try again later.");
//     }

//     setTimeout(() => {
//       setShowThanks(false);
//     }, 3000);
//   };

  return (
    <div>
      <form name="contact" data-netlify="true" className="form" method="POST">
        <input type="email" name="email" className="email" placeholder="Get The Newsletter" />
          <button type="submit">→</button>
      </form>
{/* 
      {showThanks && (
        <div className="thanks-bubble">
          <p>{thanksMessage}</p>
        </div>
      )} */}
    </div>
  );
}

export default Form;
