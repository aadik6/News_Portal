import React, { useEffect, useRef, useState } from "react";
import AdminLayout from "../../component/layout/adminLayout";
import { db } from "../../firebase";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import Loader from "../../component/loader/loader";
import { DataTable } from "../../component/reactTable/reactTable";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import "./adminHaveNews.css";

const AdminHaveNews = () => {
  const dialogRef = useRef();
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [editedFields, setEditedFields] = useState({});
  const [initialImage, setInitialImage] = useState(null); // State to store initial image

  useEffect(() => {
    const haveNews = async () => {
      const haveNewsRef = collection(db, "Alert");
      const querySnapshot = await getDocs(haveNewsRef);

      const newsData = [];
      querySnapshot.forEach((doc) => {
        newsData.push({ id: doc.id, ...doc.data() });
      });
      setNews(newsData);
    };
    haveNews();
  }, []);

  const handleSubmit = async () => {
    try {
      // Construct the news object with edited fields
      const editedNews = {
        heading: editedFields.heading,
        category: editedFields.category,
        image: editedFields.image,
        description: editedFields.description,
        authorName: editedFields.authorName,
        isBreaking: editedFields.isBreaking === 'true', // Convert string to boolean
      };
  
      // Add the edited news to the "News" collection in Firebase
      await addDoc(collection(db, "News"), editedNews);
  
      // Optionally, you can update the state or perform any other actions upon successful upload
  
      // Close the dialog
      dialogRef.current.close();
      toast.success("News Posted successfully")
    } catch (error) {
      console.error("Error adding news: ", error);
      toast.error(`${error}`)
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "Alert", id));
      setNews(news.filter((item) => item.id !== id));
      toast.success("News Deleted successfully")
    } catch (error) {
      console.error("Error deleting news: ", error);
      toast.error(`${error}`)
      // Handle error scenarios, if any
    }
  };

  const handleChange = (e, field) => {
    // Update the editedFields state when any input field changes
    setEditedFields({ ...editedFields, [field]: e.target.value });
  };

  const handleImageChange = (e) => {
    // Update editedFields and initialImage state when the image changes
    setEditedFields({ ...editedFields, image: e.target.files[0] });
    setInitialImage(URL.createObjectURL(e.target.files[0])); // Create URL for preview
  };

  const columns = [
    {
      header: "S.N.",
      cell: ({ row }) => `${+row.id + 1}`,
    },
    {
      header: "Heading",
      accessorKey: "heading",
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => {
              dialogRef.current.showModal();
              setSelectedNews(row.original);
              // Initialize edited fields with original values
              setEditedFields({
                heading: row.original.heading,
                category: row.original.category,
                image: row.original.image,
                description: row.original.description,
                authorName: row.original.authorName,
              });
              // Set initial image if available
              if (row.original.image) {
                setInitialImage(row.original.image);
              }
            }}
          >
            Details
          </button>
          <button onClick={() => handleDelete(row.original.id)}>Delete</button>
        </>
      ),
    },
  ];

  if (news.length === 0) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <DataTable columns={columns} data={news} />
      <div className="haveNews">
        <dialog ref={dialogRef}>
          {selectedNews && (
            <>
              <div className="haveNews">
                <div className="input-group">
                  <label htmlFor="heading">Suitable Heading</label>
                  <textarea
                    name="heading"
                    id="heading"
                    value={editedFields.heading}
                    onChange={(e) => handleChange(e, "heading")}
                    cols="4"
                    rows="4"
                  ></textarea>
                </div>

                <div className="input-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    name="description"
                    id="description"
                    value={editedFields.description}
                    onChange={(e) => handleChange(e, "description")}
                    cols="15"
                    rows="15"
                  ></textarea>
                </div>
                <div className="threeInput-group">
                  <div className="input-group">
                    <label htmlFor="image">Image</label>
                    <input type="file" onChange={handleImageChange} />
                  {initialImage && (
                    <div className="input-group">
                      <label>Initial Image Preview:</label>
                      <img src={initialImage} alt="Initial Preview" style={{ width: "100px", height: "100px" }} />
                    </div>
                  )}
                  </div>
                  <div className="input-group">
                    <label htmlFor="category">Related Category</label>
                    <select
                      name="category"
                      id="category"
                      value={editedFields.category}
                      onChange={(e) => handleChange(e, "category")}
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
                      value={editedFields.isBreaking}
                      onChange={(e) => handleChange(e, "isBreaking")}
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
                      value={editedFields.authorName}
                      onChange={(e) => handleChange(e, "authorName")}
                    ></input>
                  </div>
                </div>
                <button onClick={handleSubmit}>Post News</button>
                <button onClick={() => { dialogRef.current.close() }}>close</button>
              </div>
            </>
          )}
        </dialog>
      </div>
      <ToastContainer/>
    </AdminLayout>
  );
};

export default AdminHaveNews;
