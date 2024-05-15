import { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [thanksMessage, setThanksMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email format
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    if (!isValidEmail) {
      // Show the thanks bubble for invalid email
      setThanksMessage("Enter a valid email.");
      setShowThanks(true);
      // Hide the thanks bubble after 3 seconds
      setTimeout(() => {
        setShowThanks(false);
      }, 3000);
      return;
    }
    setEmail("");
    // Show the thanks bubble for valid email
    setThanksMessage("You're a little freak 😉, thanks for joining.");
    setShowThanks(true);
    // Hide the thanks bubble after 3 seconds
    setTimeout(() => {
      setShowThanks(false);
    }, 3000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div id="mc_embed_shell" className="form-shell">
      <div id="mc_embed_signup">
        <form
          action="https://printerscanner.us22.list-manage.com/subscribe/post?u=b40531d71be7f3418b9953015&amp;id=544939589d&amp;f_id=0048cbe1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_self"
          noValidate
          onSubmit={handleSubmit}
        >
          <div id="mc_embed_signup_scroll" style={{ display: "flex", gap: "10px" }}>
            <div className="mc-field-group">
              <input
                type="email"
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="Get the Newsletter"
                value={email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" name="subscribe" id="mc-embedded-subscribe" className="join-button">
              →
            </button>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <input type="text" name="b_b40531d71be7f3418b9953015_544939589d" tabIndex="-1" value="" />
            </div>
          </div>
        </form>
      </div>
      {showThanks && (
        <div className="thanks-bubble">
          <p>{thanksMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
