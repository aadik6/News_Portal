import React, { useState, useEffect } from "react";
import "./homePage.css";
import { useNewsContext } from "../context/newsFetcher";
import Article from "../components/article/article";
import Card from "../components/card/newsCard";
import Layout from "../components/layout/layout";
import Loader from "../components/loader/loader";


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
          <Article
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)}
          />
        ) : (
          <div className="parent-hero">
            {newsData.map((newsItem, index) => (
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
