import React, { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Create a context
const NewsContext = createContext();

// Custom hook to use the NewsContext
export const useNewsContext = () => useContext(NewsContext);

function NewsFetcherProvider({ children }) {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsCollectionRef = collection(db, "News");
        const querySnapshot = await getDocs(newsCollectionRef);

        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });

        setNewsData(data);
      } catch (error) {
        console.error("Error fetching news data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Provide the newsData and loading state to the children components
  return (
    <NewsContext.Provider value={{ newsData, loading }}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsFetcherProvider;
