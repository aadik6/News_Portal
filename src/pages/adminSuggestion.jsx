import React, { useEffect, useState, useRef } from "react";
import { DataTable } from "../components/reactTable/reactTable";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";
import AdminLayout from "../components/layout/adminLayout";
// import Loader from "../../component/loader/loader";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function AdminSuggestion() {
  const [suggestionData, setSuggestionData] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [loading, setLoading] = useState(true);
  const dialogRef = useRef(null);

  useEffect(() => {
    const fetchSuggestionData = async () => {
      try {
        const suggestionRef = collection(db, "suggestionForm");
        const querySnapshot = await getDocs(suggestionRef);

        const suggestionList = [];
        querySnapshot.forEach((doc) => {
          suggestionList.push({ id: doc.id, ...doc.data() });
        });
        setSuggestionData(suggestionList);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    fetchSuggestionData();
  }, []);

  const handleDetailsClick = (suggestion) => {
    setSelectedSuggestion(suggestion);
    dialogRef.current.showModal();
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "suggestionForm", id));
      setSuggestionData(suggestionData.filter((item) => item.id !== id));
      toast.success("Suggestion Deleted")
    } catch (error) {
      toast.error(`${error}`)
      
    }
  };

  const columns = [
    {
      header: "S.N.",
      cell: ({ row }) => `${+row.id + 1}`,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Action",
      cell: ({ row }) => (
        <>
          <button onClick={() => handleDetailsClick(row.original)}>
            Details
          </button>
          <button onClick={() => handleDelete(row.original.id)}>Delete</button>
        </>
      ),
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div>loading...</div>
        {/* <Loader /> */}
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <DataTable columns={columns} data={suggestionData} />
      <dialog ref={dialogRef}>
        {selectedSuggestion && (
          <div>
            <p>Name: {selectedSuggestion.name}</p>
            <p>Email: {selectedSuggestion.email}</p>
            <p>Suggestion: {selectedSuggestion.suggestion}</p>
            <button onClick={() => dialogRef.current.close()}>Close</button>
          </div>
        )}
      </dialog>
    </AdminLayout>
  );
}

export default AdminSuggestion;
