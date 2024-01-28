import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnquiryForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', { name, email, phone, message });
    // You can send the form data to your backend or perform any other actions
    // Reset the form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  return (
    <div className="container mt-5">
      <h2>Enquiry Form</h2>

      <hr className="my-2 mx-auto w-full border-t-2 border-black divider" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Contact Number</label>
          <input
            type="tel" // Changed type to 'tel' for phone number input
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Doubts/Suggestion</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn butt btn-success">Submit</button>

      </form>
    </div>
  );
};

export default EnquiryForm;
