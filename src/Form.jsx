
function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let thanksMessage;

    try {
      const formData = new FormData(e.target);
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        thanksMessage = "You're a little freak 😉, thanks for joining.";
      } else {
        thanksMessage = "Oops! Something went wrong. Please try again later.";
      }
    } catch (error) {
      thanksMessage = "Oops! Something went wrong. Please try again later.";
    }

    // Creating a div element to hold the message
    const bubble = document.createElement('div');
    bubble.className = 'thanks-bubble';
    bubble.innerHTML = `<p>${thanksMessage}</p>`;

    // Appending the bubble to the form
    e.target.appendChild(bubble);

    // Hiding the bubble after 3 seconds
    setTimeout(() => {
      bubble.remove();
    }, 3000);
  };

  return (
    <form name="contact" data-netlify="true" className="form" method="POST" onSubmit={handleSubmit}>
      <input type="email" name="email" className="email" placeholder="Get The Newsletter" />
      <button type="submit">→</button>
    </form>
  );
}

export default Form;
