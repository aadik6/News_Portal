import React, { useEffect, useRef, useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import { DataTable } from "../../component/reactTable/reactTable";
import AdminLayout from "../../component/layout/adminLayout";
import Loader from "../../component/loader/loader";

function News() {
  const { newsData, loading } = useNewsContext();
  const [news, setNews] = useState([]);
  const dialogRef = useRef();

  useEffect(() => {
    if (!loading && newsData.length > 0) {
      setNews(newsData);
    }
  }, [newsData, loading]);

  if (loading) {
    return (
      <AdminLayout>
        <Loader />
      </AdminLayout>
    );
  }

  // console.log("news as array", news);

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
              console.log("Id", row.original.id);
            }}
          >
            Edit
          </button>
          <button
             onClick={() => {
              console.log("Id", row.original.id);
            }}
          
          >
            Delete
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <AdminLayout>
        <DataTable columns={columns} data={news} />
        <dialog ref={dialogRef}>
          <h1>op</h1>
        </dialog>
      </AdminLayout>
    </>
  );
}

export default News;
