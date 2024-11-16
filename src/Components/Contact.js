import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Sending email using EmailJS
    emailjs
      .sendForm(
        "service_fwy6tcs",
        "template_axum9hp",
        form.current,
        "cyaIH-jaQm0fkSbO2"
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage('Message sent successfully!'); // Confirmation message

          // Clear form fields after submission
          
          setFormData({user_name:"",user_email:"",message:""})
        },
        (error) => {
          console.log(error.text);
          setStatusMessage('Failed to send message. Please try again.'); // Error message
        }
      );
  };

  return (
    <div className="contact-form-container">
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          value={formData.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>}
    </div>
  );
};

export default Contact;
