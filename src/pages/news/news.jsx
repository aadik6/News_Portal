import React, { useEffect, useRef, useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import { DataTable } from "../../component/reactTable/reactTable";
import AdminLayout from "../../component/layout/adminLayout";
import Loader from "../../component/loader/loader";
import { getSession } from "../../util/authContext";
import { updateDoc, doc, getFirestore, deleteDoc } from "firebase/firestore";
import { app, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

function News() {
  const db = getFirestore(app);
  const { newsData, loading, updatedNews } = useNewsContext();
  const [news, setNews] = useState([]);
  const dialogRef = useRef();
  const { displayName } = getSession();

  const [editedFields, setEditedFields] = useState({});
  const [initialImage, setInitialImage] = useState(null);

  useEffect(() => {
    if (!loading && newsData.length > 0) {
      setNews(newsData);
    }
  }, [newsData, loading]);

  const handleSave = async () => {
    try {
      let imageUrl = editedFields.image || editedFields.imageURL; // Use existing image URL if available

      if (editedFields.image && typeof editedFields.image !== 'string') {
        // Upload image to Firebase Storage only if it's a file
        const storageRef = ref(storage, `images/${Date.now()}_${editedFields.image.name}`);
        await uploadBytes(storageRef, editedFields.image);
        // Get the download URL of the uploaded image
        imageUrl = await getDownloadURL(storageRef);
      }

      // Update the editedFields with the image URL
      const updatedFields = { ...editedFields, image: imageUrl };

      // Perform patch operation on Firestore
      const newsRef = doc(db, "News", editedFields.id);
      await updateDoc(newsRef, updatedFields);
      dialogRef.current.close();
      alert("News updated")
      const updatedNewsData = newsData.map(newsItem =>
        newsItem.id === editedFields.id ? { ...newsItem, ...updatedFields } : newsItem
      );
      updatedNews(updatedNewsData);
    } catch (error) {
      console.error("Error saving news:", error);
      // Handle error, show a message to the user, etc.
    }
  };

  const handleDelete = async (id) => {
    try {
      // Delete the news document from Firestore based on its ID
      await deleteDoc(doc(db, "News", id));
      alert("News Deleted")
      // You might want to show a success message or update the UI after deletion

      // Remove the deleted news item from the news data without refreshing the page
      const updatedNewsData = newsData.filter(newsItem => newsItem.id !== id);
      updatedNews(updatedNewsData);
    } catch (error) {
      console.error("Error deleting news:", error);
      // Handle error, show a message to the user, etc.
    }
  };


  const handlechange = (e, field) => {
    setEditedFields({ ...editedFields, [field]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setEditedFields({ ...editedFields, image: file });
    setInitialImage(URL.createObjectURL(file));
  };

  if (loading) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  const columns = [
    {
      header: "SN",
      cell: ({ row }) => `${+row.id + 1}`,
    },
    {
      header: "News Id",
      accessorKey: "id",
    },
    {
      header: "Heading",
      accessorKey: "heading",
    },
    {
      header: "Author Name",
      accessorKey: "authorName",
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button
            onClick={() => {
              dialogRef.current.showModal();
              setEditedFields({
                id: row.original.id,
                heading: row.original.heading,
                description: row.original.description,
                category: row.original.category,
                image: row.original.image,
                authorName: row.original.authorName,
              });
              // Set initial image if available
              if (row.original.image) {
                setInitialImage(row.original.image);
              }
            }}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(row.original.id)}>Delete</button>
        </>
      ),
    },
  ];

  return (
    <>
      <AdminLayout>
        <DataTable columns={columns} data={news} />
        <dialog ref={dialogRef}>
          <button onClick={() => { dialogRef.current.close() }}>x</button>
          <div className="updateNews">
            <div className="input-group">
              <label htmlFor="heading">Heading</label>
              <textarea
                name="heading"
                id="heading"
                value={editedFields.heading}
                onChange={(e) => handlechange(e, "heading")}
                cols="1"
                rows="1"
                required
              ></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={editedFields.description}
                onChange={(e) => handlechange(e, "description")}
                cols="5"
                rows="15"
                required
              ></textarea>
            </div>
            <div className="threeInput-group">
              <div className="input-group">
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleFileChange} />
                {initialImage && (
                  <div className="input-group">
                    <label>Initial Image Preview:</label>
                    <img
                      src={initialImage}
                      alt="Initial Preview"
                      style={{ width: "100px", height: "100px" }}
                    />
                  </div>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  value={editedFields.category}
                  onChange={(e) => handlechange(e, "category")}
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
                  value={editedFields.isBreaking}
                  onChange={(e) => handlechange(e, "isBreaking")}
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

            <button onClick={handleSave}>Save</button>
          </div>
        </dialog>
      </AdminLayout>
    </>
  );
}

export default News;
