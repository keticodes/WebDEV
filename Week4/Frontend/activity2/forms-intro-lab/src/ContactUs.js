import { useState } from "react";

function ContactUs() {
  const { name, setName } = useState;
  const { email, setEmail } = useState;
  const { phone, setPhone } = useState;
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={email}
          />
          <select
            name="emailType"
            onChange={(e) => setEmailType(e.target.value)}
            value={emailType}
          >
            <option value="" disabled>
              Select an email type...
            </option>
            <option>Personal</option> // should be considered as en extra
            assignment.
            <option>Work</option>
          </select>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={phone}
          />
          <select
            name="phoneType"
            onChange={(e) => setPhoneType(e.target.value)}
            value={phoneType}
          >
            <option value="" disabled>
              Select a phone type...
            </option>
            <option>Home</option>
            <option>Work</option>
            <option>Mobile</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
