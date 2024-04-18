import React, { useRef, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { app } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../util/authContext";
import AdminLayout from "../../component/layout/adminLayout";
import "../addNews/addNews.css";
import { getSession } from "../../util/authContext";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function AddNews() {
  const storage = getStorage(app);
  const [buttonDisable, setButtonDisable] = useState(false)
  const { displayName } = getSession();
  const inputFiledRef = useRef()
  // console.log(displayName, "name");

  const initialState = {
    heading: "",
    description: "",
    image: null, 
    category: "",
    isBreaking: false,
    authorName: displayName,
  };

  const [formData, setFormData] = useState(initialState);
  const [file, setFile] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handlePostNews = async () => {
    try {
      // Create a reference to the file in Firebase storage
      setButtonDisable(true)
      const uploadRef = ref(storage, `News/${file.name}`);

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
      const docRef = await addDoc(collection(db, "News"), updatedData);
      toast.success('News posted successfully! 🎉');
      setFormData(initialState);
      setFile(null)
      inputFiledRef.current.value =""
    } catch (e) {
      toast.error(`${e}😔`);
      console.error("Error adding document: ", e);
    }finally{
      setButtonDisable(false)
    }
  };

  return (
    <AdminLayout>
      <>
        <div className="addNews">
          <div className="input-group">
            <label htmlFor="heading">Heading</label>
            <textarea
              name="heading"
              id="heading"
              value={formData.heading}
              onChange={handlechange}
              cols="2"
              rows="2"
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
              <input type="file" onChange={handleFileChange} ref={inputFiledRef} />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <select
                name="category"
                id="category"
                value={formData.category}
                onChange={handlechange}
                required
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
              <label htmlFor="author">Author Name</label>
              <input type="text" readOnly value={displayName}></input>
            </div>
          </div>

          <button onClick={handlePostNews} disabled={buttonDisable}>
            {buttonDisable ? "Posting" : "Post News"}
          </button>
        </div>
      </>
    </AdminLayout>
  );
}

export default AddNews;
