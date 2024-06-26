import React, { useEffect, useRef, useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import { DataTable } from "../../component/reactTable/reactTable";
import AdminLayout from "../../component/layout/adminLayout";
import Loader from "../../component/loader/loader";
import { getSession } from "../../util/authContext";
import {
  updateDoc,
  doc,
  getFirestore,
  deleteDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import { app, storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function News() {
  const db = getFirestore(app);
  const { newsData, loading, updatedNews } = useNewsContext();
  const [news, setNews] = useState([]);
  const dialogRef = useRef();
  const { displayName, email } = getSession();

  const [editedFields, setEditedFields] = useState({});
  const [initialImage, setInitialImage] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        if (loding) {
          const newsCollection = collection(db, "News");
          const querySnapshot = await getDocs(newsCollection);
          const fetchedNewsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));

          let filteredNewsData = fetchedNewsData;
          // Check super admin
          if (displayName && email !== "aadarshkumarman@gmail.com") {
            filteredNewsData = fetchedNewsData.filter(
              (newsItem) => newsItem.authorName === displayName
            );
          }

          // Convert Firebase timestamps to JavaScript Date objects and sort the news data
          const sortedNewsData = filteredNewsData
            .filter((newsItem) => newsItem.time && newsItem.time.seconds && newsItem.time.nanoseconds)
            .sort((a, b) => {
              const dateA = new Date(a.time.seconds * 1000 + a.time.nanoseconds / 1000000);
              const dateB = new Date(b.time.seconds * 1000 + b.time.nanoseconds / 1000000);
              return dateB - dateA;
            });

          setNews(sortedNewsData);
          updatedNews(sortedNewsData);
          setLoding(false);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
        setLoding(false);
      }
    };

    fetchNewsData();
  }, [db, displayName, updatedNews, loding]);

  const handleSave = async () => {
    if (!editedFields.heading) {
      toast.error("Heading cannot be empty!");
      return;
    }
    if (!editedFields.description) {
      toast.error("Description cannot be empty!");
      return;
    }

    try {
      let imageUrl = editedFields.image || editedFields.imageURL; // Use existing image URL if available

      if (editedFields.image && typeof editedFields.image !== "string") {
        const storageRef = ref(
          storage,
          `images/${Date.now()}_${editedFields.image.name}`
        );
        await uploadBytes(storageRef, editedFields.image);
        imageUrl = await getDownloadURL(storageRef);
      }

      const updatedFields = { ...editedFields, image: imageUrl };

      const newsRef = doc(db, "News", editedFields.id);
      await updateDoc(newsRef, updatedFields);
      dialogRef.current.close();
      toast.success("News Updated Successfully");
      setLoding(true);
      const updatedNewsData = newsData.map((newsItem) =>
        newsItem.id === editedFields.id
          ? { ...newsItem, ...updatedFields }
          : newsItem
      );
      updatedNews(updatedNewsData);
    } catch (error) {
      toast.error(`${error}`);
      console.error("Error saving news:", error);
    } finally {
      setLoding(true);
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this news?");
    if (!isConfirmed) {
      return;
    }

    try {
      await deleteDoc(doc(db, "News", id));
      const updatedNewsData = news.filter((newsItem) => newsItem.id !== id); // Filter out the deleted news item
      setNews(updatedNewsData); // Update the state with filtered data
      updatedNews(updatedNewsData);
      toast.success("News deleted", { closeOnClick: true, pauseOnHover: false });
    } catch (error) {
      toast.error(`${error}`);
      console.error("Error deleting news:", error);
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
              setLoding(true);
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

  if (loading) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  return (
    <>
      <AdminLayout>
        <DataTable columns={columns} data={news} />
        <dialog ref={dialogRef}>
          <button
            onClick={() => {
              dialogRef.current.close();
            }}
          >
            x
          </button>
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
                  <option value="entertainment">Entertainment</option>
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
