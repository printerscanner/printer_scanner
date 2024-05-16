import { useState } from 'react';
import '../css/form.css';

function ContactForm() {
  const [sliderOneValue, setSliderOneValue] = useState(5);
  const [sliderTwoValue, setSliderTwoValue] = useState(65);
  
  const handleSliderOneChange = (e) => {
    setSliderOneValue(parseInt(e.target.value));
    if (sliderTwoValue - parseInt(e.target.value) <= minGap) {
      setSliderTwoValue(parseInt(e.target.value) + minGap);
    }
    fillColor();
  };
  
  const handleSliderTwoChange = (e) => {
    setSliderTwoValue(parseInt(e.target.value));
    if (parseInt(e.target.value) - sliderOneValue <= minGap) {
      setSliderOneValue(parseInt(e.target.value) - minGap);
    }
    fillColor();
  };
  
  const fillColor = () => {
    const percent1 = (sliderOneValue / sliderMaxValue) * 100;
    const percent2 = (sliderTwoValue / sliderMaxValue) * 100;
    const sliderTrack = document.querySelector(".slider-track");
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  };

  const minGap = 0;
  const sliderMaxValue = 100;

  const handleSubmit = async (e) => {
    let thanksMessage
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
        thanksMessage = "You're a little freak 😉, thanks for joining.";
        // Reset form fields if needed
        e.target.reset();
      } else {
        thanksMessage = "Oops! Something went wrong. Please try again later.";
      }
    } catch (error) {
      console.error('Form submission failed:', error);
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
    <form
      name="submission"
      method="POST"
      data-netlify="true"
      className='form contact-form'
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      
      {/* Name */}
      My Name is <input
        id="name"
        name="name"
        type="text"
        className="name"
        placeholder="Your Name"
      />

      
      {/* Company */}
      and I work at <input
        id="company"
        name="company"
        type="text"
        className="company"
        placeholder="Your Company"
      />

      {/* Email */}
      . You can reach me at
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Your Email"
      />

      {/* Radio Button */}
      I'm looking for 
        
          <input
            type="radio"
            name="interest"
            value="Web Design"
          />
        <label>
          Web Design
        </label>
        
          <input
            type="radio"
            name="interest"
            value="Web Development"
          />
        <label>
          Web Development
        </label>
        <input
            type="radio"
            name="interest"
            value="Product MVP"
          />
        <label>
          Product MVP
        </label>
        <input
            type="radio"
            name="interest"
            value="Ecommerce"
          />
        <label>
        Ecommerce
        </label>
          <input
            type="radio"
            name="interest"
            value="Other"
          />
        <label>
          Other
        </label>
      {/* Budget Range Slider */}
            {/* Tell us more textarea */}
            <textarea
        id="tell-us-more"
        className="text-area"
        name="tell-us-more"
        placeholder="Tell us more"
      ></textarea>
      <div className="wrapper">
        <div>
        Our budget ranges from €
          <span id="range1">{sliderOneValue}k</span>
          <span>&ndash;</span>
          <span id="range2">  {sliderTwoValue}k.</span>
        </div>
        <div className="container">
          <div className="slider-track"></div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderOneValue}
            id="slider-1"
            onChange={handleSliderOneChange}
          />
          <input
            type="range"
            min="0"
            max="100"
            value={sliderTwoValue}
            id="slider-2"
            onChange={handleSliderTwoChange}
          />
        </div>
      </div>

      {/* Start Date */}
      We want to launch
      <input
        id="start-date"
        name="start-date"
        type="text"
        className="start-date"
        placeholder="Start Date"
      />
    
      <button type="submit" className='submit'>Submit</button>
    </form>
  );
}

export default ContactForm;
