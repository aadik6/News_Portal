import React, { useRef, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { app } from "../../firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth } from "../../util/authContext";
import AdminLayout from "../../component/layout/adminLayout";
import "../addNews/addNews.css";
import { getSession } from "../../util/authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddNews() {
  const storage = getStorage(app);
  const [buttonDisable, setButtonDisable] = useState(false);
  const { displayName } = getSession();
  const inputFiledRef = useRef();

  const initialState = {
    heading: "",
    description: "",
    image: null,
    category: "technology",
    isBreaking: false,
    authorName: displayName,
  };

  const [formData, setFormData] = useState(initialState);
  const [file, setFile] = useState(null);

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "heading" && !/^[a-zA-Z\s]*$/.test(value)) {
      toast.error("Heading can only contain letters and spaces!");
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    const validTypes = ["image/jpeg", "image/png"];
    if (selectedFile && validTypes.includes(selectedFile.type)) {
      setFile(selectedFile);
    } else {
      toast.error("Only JPEG and PNG files are allowed!");
      inputFiledRef.current.value = "";
    }
  };

  const handlePostNews = async () => {
    if (!formData.heading) {
      toast.error("Heading cannot be empty!");
      return;
    }
    if (!formData.description) {
      toast.error("Description cannot be empty!");
      return;
    }
    if (!file) {
      toast.warning("Upload an image!");
      return;
    }

    try {
      setButtonDisable(true);
      const uploadRef = ref(storage, `News/${file.name}`);
      const snapshot = await uploadBytes(uploadRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      const currentTime = serverTimestamp();

      const updatedData = {
        ...formData,
        image: downloadURL,
        time: currentTime,
      };

      await addDoc(collection(db, "News"), updatedData);
      toast.success("News posted successfully! 🎉");
      setFormData(initialState);
      setFile(null);
      inputFiledRef.current.value = "";
    } catch (e) {
      toast.error(`${e} 😔`);
      console.error("Error adding document: ", e);
    } finally {
      setButtonDisable(false);
    }
  };

  return (
    <AdminLayout>
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
            <input
              type="file"
              accept="image/jpeg, image/png"
              onChange={handleFileChange}
              ref={inputFiledRef}
            />
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
              <option value="entertainment">Entertainment</option>
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
    </AdminLayout>
  );
}

export default AddNews;
