import React, { useState } from "react";

function Form() {
  const [email, setEmail] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [thanksMessage, setThanksMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowThanks(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          "form-name": "subscribe",
          email,
        }).toString(),
      });

      if (response.ok) {
        setEmail("");
        setThanksMessage("You're a little freak 😉, thanks for joining.");
      } else {
        setThanksMessage("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      setThanksMessage("Oops! Something went wrong. Please try again later.");
    }

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
        <form name="subscribe" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="subscribe" /> {/* Required for Netlify */}

          <div id="mc_embed_signup_scroll" style={{ display: "flex", gap: "10px" }}>
            <div className="mc-field-group">
              <input
                type="email"
                name="email"
                className="required email"
                id="mce-EMAIL"
                required
                placeholder="Get the Newsletter"
                value={email}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="join-button">
              →
            </button>
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
