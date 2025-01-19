import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../Contact Us/ContactUs.css';

const Contact = () => {
  const [result, setResult] = useState('');
  const form = useRef();

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending...');

    try {
      await emailjs.sendForm(
        'service_3jm7p45', // Replace with your EmailJS service ID
        'template_wgf7652', // Replace with your EmailJS template ID
        form.current,
        '35jHQGDMT990ayOtC' // Replace with your EmailJS public key
      );
      setResult('Email sent successfully!');
      form.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setResult('Failed to send the email. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact-us">
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <FaPaperPlane style={{ marginLeft: '10px' }} />
        </h3>
        <p>
          If you have any questions, feedback, or require further assistance, we’d love to hear from you! 
          Our team is here to ensure your experience with us is seamless and enjoyable. 
          Please fill out the form below with your details and message, and we’ll get back to you as soon as possible. 
          Whether it’s a query, a suggestion, or simply a hello, we’re always happy to connect with you!
        </p>
        <ul>
          <li>
            <FaEnvelope style={{ marginRight: '10px' }} /> agency@gmail.com
          </li>
          <li>
            <FaPhone style={{ marginRight: '10px' }} /> Phone: 123-456-7890
          </li>
          <li>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} />
            elkef <br /> Tunisia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form ref={form} onSubmit={onSubmit}>
          <label>Your Name</label>
          <input type="text" name="from_name" placeholder="Enter your name" required />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your mobile number" required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
          <button type="submit" className="btn dark-btn">
            Send now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;
