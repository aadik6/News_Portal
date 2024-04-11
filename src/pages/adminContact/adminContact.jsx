import React, { useEffect, useState, useRef } from 'react';
import { DataTable } from '../../component/reactTable/reactTable';
import { collection, getDocs, deleteDoc,doc } from 'firebase/firestore';
import { db } from '../../firebase';
import AdminLayout from '../../component/layout/adminLayout';
import Loader from '../../component/loader/loader';
import { ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminContact() {
    const [contactData, setContactData] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);
    const [loading, setLoading]= useState(true)
    const dialogRef = useRef(null);

    useEffect(() => {
        const fetchContactData = async () => {
            try {
                const contactRef = collection(db, "contactForm");
                const querySnapshot = await getDocs(contactRef);

                const contactList = [];
                querySnapshot.forEach(doc => {
                    contactList.push({ id: doc.id, ...doc.data() });
                });
                setContactData(contactList);
            } catch (error) {
                console.error("Error fetching contact data: ", error);
                // Handle error scenarios, if any
            } finally {
                setLoading(false); // Set loading to false whether successful or not
            }
        };
        fetchContactData();
    }, []);

    const handleDetailsClick = (contact) => {
        setSelectedContact(contact);
        dialogRef.current.showModal();
    };

    const handleDelete = async (id) => {
        try {
          await deleteDoc(doc(db, "contactForm", id));
          setContactData(contactData.filter((item) => item.id !== id));
          toast.success("Contact Deleted")
        } catch (error) {
          console.error("Error deleting news: ", error);
          toast.error(`${error.message}`)
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
            header: "Mobile",
            accessorKey: "phone"
        },
        {
            header: "Action",
            cell: ({ row }) => (
                <>
                <button onClick={() => handleDetailsClick(row.original)}>Details</button>
                <button onClick={()=>handleDelete(row.original.id)}>Delete</button>
                </>
            )
        }
    ];

    if(loading){
        return(
            <AdminLayout>             
                <Loader/>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <DataTable columns={columns} data={contactData} />
            <dialog ref={dialogRef}>
                {selectedContact && (
                    <div>
                        <p>Name: {selectedContact.name}</p>
                        <p>Mobile: {selectedContact.phone}</p>
                        <p>Email: {selectedContact.email}</p>
                        <p>Message: {selectedContact.message}</p>
                        <button onClick={() => dialogRef.current.close()}>Close</button>
                    </div>
                )}
            </dialog>
            <ToastContainer/>
        </AdminLayout>
    );
}

export default AdminContact;
