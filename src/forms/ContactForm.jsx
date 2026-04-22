import { useState } from "react";
import "../css/form.css";

function ContactForm() {
  const [selectedInterest, setSelectedInterest] = useState("");
  const BUDGET_MIN_K = 15;
  const BUDGET_MAX_K = 121;
  const [budgetLowK, setBudgetLowK] = useState(BUDGET_MIN_K);
  const [budgetHighK, setBudgetHighK] = useState(BUDGET_MAX_K);

  const handleInterestSelection = (interest) => {
    setSelectedInterest(interest);
  };

  const clampBudgetK = (value) => {
    if (!Number.isFinite(value)) return BUDGET_MIN_K;
    return Math.min(BUDGET_MAX_K, Math.max(BUDGET_MIN_K, value));
  };

  const handleBudgetLowChange = (e) => {
    const nextLow = clampBudgetK(parseInt(e.target.value, 10));
    setBudgetLowK(nextLow);
    if (nextLow > budgetHighK) setBudgetHighK(nextLow);
  };

  const handleBudgetHighChange = (e) => {
    const nextHigh = clampBudgetK(parseInt(e.target.value, 10));
    setBudgetHighK(nextHigh);
    if (nextHigh < budgetLowK) setBudgetLowK(nextHigh);
  };

  const handleSubmit = async (e) => {
    let thanksMessage;
    e.preventDefault();

    // Combine all form values into a single message
    const message = JSON.stringify({
      company: e.target.company.value,
      details: e.target.details.value,
      interest: selectedInterest,
      BudgetLow: budgetLowK,
      BudgetHigh: budgetHighK,
      "start-date": e.target["start-date"].value,
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "submission",
          name: e.target.name.value,
          email: e.target.email.value,
          message: message, // Include the combined message
        }).toString(),
      });

      if (response.ok) {
        thanksMessage =
          "Our AI (my cousin) is hard at work on a response to your submission right now.";
        // Reset form fields if needed
        e.target.reset();
        setSelectedInterest("");
        setBudgetLowK(BUDGET_MIN_K);
        setBudgetHighK(BUDGET_MAX_K);
      } else {
        thanksMessage =
          "Oops! Something went wrong. Did you fill out the form?";
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      thanksMessage = "Oops! Something went wrong.";
    }

    // Creating a div element to hold the message
    const bubble = document.createElement("div");
    bubble.className = "thanks-bubble bottom";
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
      className="grid-layout"
      onSubmit={handleSubmit}
    >
      <div className="grid-item span-all text xl-grid">
        <p>Let’s work together!</p>
      </div>

      {/* Name */}
      <div className="grid-item text xl-grid">
        <p>Name</p>
      </div>
      <input
        id="name"
        name="name"
        type="text"
        className="grid-item span-5"
        placeholder="Elizabeth Holmes"
      />

      {/* Email */}
      <div className="grid-item text xl-grid">
        <p>Email</p>
      </div>

      <input
        id="email"
        name="email"
        type="email"
        required
        className="grid-item span-5"
        placeholder="lizzie@theranos.com"
      />

      {/* Company */}

      <div className="grid-item text xl-grid">
        <p>Organization</p>
      </div>
      <input
        id="company"
        name="company"
        type="text"
        className="grid-item span-5"
        placeholder="Theranos"
      />

      {/* Interest buttons */}
      <div className="grid-item text xl-grid">
        <p>We&apos;re looking for</p>
      </div>
      {[
        "Web Design",
        "Web Development",
        "Product MVP",
        "Ecommerce",
        "Other",
      ].map((interest) => (
        <button
          key={interest}
          type="button"
          className={`grid-item select-button ${selectedInterest === interest ? "selected" : ""} ${interest.toLowerCase().replace(/\s+/g, "-")}-hover`}
          onClick={() => handleInterestSelection(interest)}
        >
          {interest}
        </button>
      ))}

      <div className="grid-item text xl-grid">
        <p>Details</p>
      </div>
      <input
        id="details"
        name="details"
        type="text"
        className="grid-item span-5"
        placeholder="Tell us more"
      />

      <div className="grid-item text xl-grid">
        <p>Budget</p>
      </div>

      <input
        id="start-date"
        name="start-date"
        type="text"
        className="grid-item span-5"
        placeholder="200,000,000 EUR"
      />
      {/* Start Date */}
      <div className="grid-item text xl-grid">
        <p>Target Launch Date</p>
      </div>
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

      <button type="submit" className="submit grid-item">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
