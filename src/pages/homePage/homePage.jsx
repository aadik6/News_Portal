import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Card from "../../component/card/newsCard";
import Article from "../../component/article/article";
import 'react-toastify/dist/ReactToastify.css';
import "../homePage/homePage.css";

function HomePage() {
  const { newsData, loading } = useNewsContext();
  const [sortedNewsData, setSortedNewsData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    if (newsData.length > 0) {
      console.log("Original newsData:", newsData);
      const sortedData = [...newsData]
        .filter(item => item.time && item.time.seconds && item.time.nanoseconds)
        .sort((a, b) => {
          const dateA = new Date(a.time.seconds * 1000 + a.time.nanoseconds / 1000000);
          const dateB = new Date(b.time.seconds * 1000 + b.time.nanoseconds / 1000000);
          return dateB - dateA;
        });
      console.log("Sorted newsData:", sortedData);
      setSortedNewsData(sortedData);
    }
  }, [newsData]);

  if (loading) {
    return (
      <Layout>
        <div className="HomePage-parent">
          <Loader />
        </div>
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(sortedNewsData[index]);
  };

  return (
    <Layout>
      <div className="HomePage-parent">
        {selectedArticle ? (
          <Article
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        ) : (
          <div className="parent-hero">
            {sortedNewsData.map((newsItem, index) => (
              <Card
                key={index}
                news={newsItem}
                onClick={() => handleNewsItemClick(index)}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
