import React, { useState } from "react";

function ContactUs() {
  // Step 3: Create state variables for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    phoneType: "home",
    comments: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Step 5: Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with formData, e.g., send it to a server
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Phone */}
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />

        {/* Phone Type */}
        <label htmlFor="phoneType">Phone Type:</label>
        <select
          id="phoneType"
          name="phoneType"
          value={formData.phoneType}
          onChange={handleInputChange}
        >
          <option value="home">Home</option>
          <option value="work">Work</option>
          <option value="mobile">Mobile</option>
        </select>

        {/* Comments */}
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
