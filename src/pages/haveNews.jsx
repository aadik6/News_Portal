import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db,app } from "../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Layout from '../components/layout/layout';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./addNews.css";

// Initialize Firebase storage
const storage = getStorage(app);

function HaveNews() {
  const initialState = {
    heading: "",
    description: "",
    image: null, // Store image URL or reference here
    category: "",
    isBreaking: false,
    authorName: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [file, setFile] = useState(null);
  const [buttonDisable, setButtonDisable] = useState(false);
  const inputFileRef = useRef(null);

  // Handle input field changes
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  // Validate image file type
  const isValidImageType = (file) => {
    const validImageTypes = ["image/jpeg", "image/png"];
    return file && validImageTypes.includes(file.type);
  };

  // Validate heading to only contain characters and spaces
  const isValidHeading = (heading) => {
    return /^[a-zA-Z\s]+$/.test(heading);
  };

  // Handle posting news to Firestore
  const handlePostNews = async () => {
    if (!isValidHeading(formData.heading)) {
      toast.error("Heading can only contain letters and spaces!");
      return;
    }
    if (!formData.heading) {
      toast.error("Heading cannot be empty!");
      return;
    }
    if (!formData.description) {
      toast.error("Description cannot be empty!");
      return;
    }
    if (!isValidImageType(file)) {
      toast.error("Please upload a valid JPEG or PNG image!");
      return;
    }

    try {
      setButtonDisable(true);
      
      // Create a reference to the file in Firebase storage within the "Alert" folder
      const uploadRef = ref(storage, `Alert/${file.name}`);

      // Upload the file to Firebase storage
      const snapshot = await uploadBytes(uploadRef, file);
      console.log("Uploaded a file!");

      // Get the download URL of the uploaded file
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log("download url:", downloadURL);

      // Update formData with the image URL
      const updatedData = {
        ...formData,
        image: downloadURL,
      };

      // Add the updated data to Firestore
      const docRef = await addDoc(collection(db, "Alert"), updatedData);
      toast.success("News Sent Successfully");
      setFormData(initialState);
      setFile(null);
      inputFileRef.current.value = "";
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error(`${error.message}`);
    } finally {
      setButtonDisable(false);
    }
  };

  return (
    <Layout>
      <>
        <div className="haveNews">
          <div className="input-group">
            <label htmlFor="heading">Suitable Heading</label>
            <textarea
              name="heading"
              id="heading"
              value={formData.heading}
              onChange={handlechange}
              cols="4"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="input-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handlechange}
              cols="15"
              rows="15"
              required
            ></textarea>
          </div>
          <div className="threeInput-group">
            <div className="input-group">
              <label htmlFor="image">Image</label>
              <input type="file" onChange={handleFileChange} ref={inputFileRef} />
            </div>
            <div className="input-group">
              <label htmlFor="category">Related Category</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handlechange}
                required
              >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="sport">Sport</option>
                <option value="politics">Politics</option>
                <option value="education">Education</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="isBreaking">Is Breaking</label>
              <select
                name="isBreaking"
                id="isBreaking"
                value={formData.isBreaking}
                onChange={handlechange}
                required
              >
                <option value="">Select Option</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>

            <div className="input-group">
              <label htmlFor="author">Your Name</label>
              <input
                type="text"
                id="authorName"
                name="authorName"
                value={formData.authorName}
                onChange={handlechange}
                required
              ></input>
            </div>
          </div>

          <button onClick={handlePostNews} disabled={buttonDisable}>Send News</button>
        </div>
      </>
    </Layout>
  );
}

export default HaveNews;
