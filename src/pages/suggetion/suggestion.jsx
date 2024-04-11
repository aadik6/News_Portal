import React, { useState } from "react";
import "./suggestion.css";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
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
    try {
      setButtonDisable(true);
      const suggestionForm = await addDoc(
        collection(db, "suggestionForm"),
        formData
      );
      console.log(formData);
      toast.success("Suggestion sent");
      close();
    } catch (error) {
      toast.error(`${error}`);
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
        <button type="submit">Submit</button>
        <button onClick={close} disabled={buttonDisable}>
          Close
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Suggestion;
