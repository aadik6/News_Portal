import React, { useState } from "react";
import Layout from "../../component/layout/layout";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Card from "../../component/card/newsCard";
import Article from "../../component/article/article";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../homePage/homePage.css";

function HomePage() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

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
    setSelectedArticle(newsData[index]);
  };

  return (
    <Layout>
      <div className="HomePage-parent">
        {selectedArticle ? (
          // Render the Article component
          <Article
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        ) : (
          // Render the Card components
          <div className="parent-hero">
            {newsData.slice(0, 4).map((newsItem, index) => (
              <Card
                key={index}
                news={newsItem}
                onClick={() => handleNewsItemClick(index)}
              />
            ))}
          </div>
        )}
      </div>
      <ToastContainer/>
    </Layout>
  );
}

export default HomePage;
