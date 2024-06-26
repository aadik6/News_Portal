import React, { useState } from "react";
import "./suggestion.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Suggestion = ({ close }) => {
  const [buttonDisable, setButtonDisable] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate name
    const isNameValid = /^[a-zA-Z\s]+$/.test(formData.name);
    if (!isNameValid) {
      toast.error("Name can only contain letters and spaces!");
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
      await addDoc(collection(db, "suggestionForm"), formData);
      toast.success("Suggestion sent");
      setFormData({
        name: "",
        email: "",
        suggestion: "",
      });
      close();
    } catch (error) {
      toast.error(`${error.message}`);
    } finally {
      setButtonDisable(false);
    }
  };

  return (
    <div className="suggestion-container">
      <h2>Thank you for your suggestion!</h2>
      <p>
        We're always looking for ways to improve. Your feedback is valuable to
        us.
      </p>
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
        <button type="submit" disabled={buttonDisable}>Submit</button>
        <button onClick={close} className="closeBtn">
          Close
        </button>
      </form>
    </div>
  );
};

export default Suggestion;
