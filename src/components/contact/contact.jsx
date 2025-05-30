import React, { useState } from 'react';
import './contact.css';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ close }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const initial = {
    name: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formData, setFormData] = useState(initial)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name
    const isNameValid = /^[a-zA-Z\s]+$/.test(formData.name);
    if (!isNameValid) {
      // toast.error("Name can only contain letters and spaces!");
      return;
    }

    // Validate phone number
    const isPhoneValid = /^\d{10}$/.test(formData.phone);
    if (!isPhoneValid) {
      toast.error("Phone number must be exactly 10 digits!");
      return;
    }

    // Validate email
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      setButtonDisable(true);
      await addDoc(collection(db, "contactForm"), formData);
      // toast.success("Contact details sent");
      close();
      setFormData(initial);
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setButtonDisable(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type="tel"
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" disabled={buttonDisable}>Submit</button>
      </form>
      <button onClick={close} className='closeBtn'>Close</button>
    </div>
  );
};

export default Contact;
