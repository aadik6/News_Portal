import React, { useState } from 'react';
import "./suggestion.css"
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../firebase';

const Suggestion = ({ close }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    suggestion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const suggestionForm = await addDoc(collection(db,"suggestionForm"),formData)
    // Here you can handle the submission of the suggestion, e.g., send it to a server
    console.log(formData);
    // Close the suggestion dialog after submission
    close();
  };

  return (
    <div className="suggestion-container">
      <h2>Thank you for your suggestion!</h2>
      <p>We're always looking for ways to improve. Your feedback is valuable to us.</p>
      <p>Please feel free to share your thoughts and ideas.</p>
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
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea
            id="suggestion"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={close}>Close</button>
      </form>
    </div>
  );
};

export default Suggestion;
