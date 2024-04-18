import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { app } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Layout from "../../component/layout/layout";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./haveNews.css"

// Initialize Firebase storage
const storage = getStorage(app);

function AlertNews() {
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

  // Handle posting news to Firestore
  const handlePostNews = async () => {
    try {
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
      // console.log("Document written with ID: ", docRef.id);
      toast.success("News Sent Successfully")
      setFormData(initialState);
      setFile(null)
      inputFileRef.current.value = "";
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error(`${error}`)
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
              >
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
              >
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
              ></input>
            </div>
          </div>

          <button onClick={handlePostNews}>Send News</button>
        </div>
      </>
    </Layout>
  );
}

export default AlertNews;
