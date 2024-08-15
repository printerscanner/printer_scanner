import { useState } from 'react';
import '../css/form.css';

function ContactForm() {
  const [sliderOneValue, setSliderOneValue] = useState(15);
  const [sliderTwoValue, setSliderTwoValue] = useState(75);
  const [selectedInterest, setSelectedInterest] = useState('');

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

  const handleInterestSelection = (interest) => {
    setSelectedInterest(interest);
  };

  const fillColor = () => {
    const percent1 = (sliderOneValue / 150) * 100;
    const percent2 = (sliderTwoValue / 150) * 100;
    const sliderTrack = document.querySelector(".slider-track");
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
  };

  const minGap = 0;

  const handleSubmit = async (e) => {
    let thanksMessage;
    e.preventDefault();
    
    // Combine all form values into a single message
    const message = JSON.stringify({
      company: e.target.company.value,
      details: e.target.details.value,
      interest: selectedInterest,
      BudgetLow: sliderOneValue,
      BudgetHigh: sliderTwoValue,
      'start-date': e.target['start-date'].value
    });
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'submission',
          name: e.target.name.value,
          email: e.target.email.value,
          message: message // Include the combined message
        }).toString(),
      });
      
      if (response.ok) {
        thanksMessage = "Our AI (my cousin) is hard at work on a response to your submission right now.";
        // Reset form fields if needed
        e.target.reset();
      } else {
        thanksMessage = "Oops! Something went wrong. Did you fill out the form?";
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      thanksMessage = "Oops! Something went wrong.";
    }
    
    // Creating a div element to hold the message
    const bubble = document.createElement('div');
    bubble.className = 'thanks-bubble bottom';
    bubble.innerHTML = `<p>${thanksMessage}</p>`;
    
    // Appending the bubble to the form
    document.body.appendChild(bubble);
    
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
      className='grid-layout'
      onSubmit={handleSubmit}
    >
     <div className='grid-item span-all text xl-grid'><p>We would love to hear from you. Still not convinced? Learn more about us on <a href="https://biz.printerscanner.net">our marketing site</a>.</p></div>

      {/* Name */}
      <div className='grid-item text xl-grid'><p>Name</p></div>
      <input
        id="name"
        name="name"
        type="text"
        className="grid-item span-5" 
        placeholder="Elizabeth Holmes"
      />

      {/* Email */}
      <div className='grid-item text xl-grid'><p>Email</p></div>
      
      <input
        id="email"
        name="email"
        type="email"
        required
        className='grid-item span-5'
        placeholder="lizzie@theranos.com"
      />

      
      {/* Company */}

      <div className='grid-item text xl-grid'><p>Organization</p></div>
      <input
        id="company"
        name="company"
        type="text"
        className="grid-item span-5"
        placeholder="Theranos"
      />

      {/* Interest buttons */}
      <div className='grid-item text xl-grid'><p>We're looking for</p></div>
      {["Web Design", "Web Development", "Product MVP", "Ecommerce", "Other"].map(interest => (
        <button
          key={interest}
          type="button"
          className={`grid-item select-button ${selectedInterest === interest ? "selected" : ""} ${interest.toLowerCase().replace(/\s+/g, '-')}-hover`}
          onClick={() => handleInterestSelection(interest)}
        >
          {interest}
        </button>
      ))}

    <div className='grid-item text xl-grid'><p>Details</p></div>
      <input
        id="details"
        name="details"
        type="text"
        className="grid-item span-5" 
        placeholder="Tell us more"
      />  

        <div className='grid-item text xl-grid'><p>Budget</p></div>

      {/* Budget Range Slider */}
      <div className="wrapper span-most">
        <div className="container">
          <div className="slider-track"></div>
          <input
            type="range"
            min="0"
            max="150"
            value={sliderOneValue}
            id="slider-1"
            onChange={handleSliderOneChange}
          />
          <input
            type="range"
            min="0"
            max="150"
            value={sliderTwoValue}
            id="slider-2"
            onChange={handleSliderTwoChange}
          />
        </div>
      </div>
      <div className='grid-item text xl-grid'>
          <span id="range1">€{sliderOneValue}k</span>
          <span>&ndash;</span>
          <span id="range2">  {sliderTwoValue}k.</span>
        </div>
      {/* Start Date */}
      <div className='grid-item text xl-grid'><p>Target Launch Date</p></div>
      <input
        id="start-date"
        name="start-date"
        type="text"
        className="grid-item span-most"
        placeholder="January 1, 2029"
      />

        <input
        type="hidden"
        id="interest"
        name="interest"
        value={selectedInterest}
      />

      <input
        type="hidden"
        id="slider1Value"
        name="slider1Value"
        value={sliderOneValue}
      />

      <input
        type="hidden"
        id="slider2Value"
        name="slider2Value"
        value={sliderTwoValue}
      />
    
      <button type="submit" className='submit grid-item'>Submit</button>
    </form>
  );
}

export default ContactForm;
