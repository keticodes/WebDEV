import React, { useState } from 'react';
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('en');

  // Function to validate email
  const isEmailValid = (email) => {
    // You can implement your email validation logic here
    // For simplicity, I'll use a basic regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to check password strength
  const isPasswordStrong = (password) => {
    // You can implement your password strength logic here
    // For simplicity, I'll consider a strong password if it's at least 8 characters long
    return password.length >= 8;
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  // Function to handle nationality select change
  const handleNationalityChange = (e) => {
    const newNationality = e.target.value;
    setNationality(newNationality);
  };

  return (
    <div>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ borderColor: isEmailValid(email) ? 'green' : 'red' }}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ borderColor: isPasswordStrong(password) ? 'green' : 'red' }}
        />
      </label>
      <br />
      <label>
        Select Nationality:
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </label>
      <br />
      <p>
        {nationality === 'en' && 'Hello'}
        {nationality === 'de' && 'Hallo'}
        {nationality === 'fr' && 'Bonjour'}
      </p>
      <p>Your email is {email}</p>
    </div>
  );
};

export default SignupPage;

