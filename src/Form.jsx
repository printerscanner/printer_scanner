
// function Form() {
//   return (
//     <form 
//     name="contact" 
//     method="POST" 
//     data-netlify="true" 
//     className="form"
//    >
//   <input type="hidden" name="form-name" value="contact" />
//      <input id="standard-basic" label="email" name="email" className="email" placeholder="Get the Newsletter" />
//      <button type="submit">→</button>
//     </form>
//   );
// }

// export default Form;

import React from 'react';

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          email: e.target.email.value,
        }).toString(),
      });
      if (response.ok) {
        alert('Form submitted successfully!');
        // Reset form fields if needed
        e.target.reset();
      } else {
        alert('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Form submission failed. Please try again.');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="form"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <input
        id="standard-basic"
        label="email"
        name="email"
        className="email"
        placeholder="Get the Newsletter"
      />
      <button type="submit">→</button>
    </form>
  );
}

export default Form;
