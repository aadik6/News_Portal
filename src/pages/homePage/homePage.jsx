import React, { useState } from "react";
import Layout from "../../component/layout/layout";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Article from "../../component/article/article";
import "../homePage/homePage.css";

function HomePage() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null); // State to track the selected article

  if (loading) {
    return (
      <Layout>
        <div className="HomePage-parent">
          <Loader />
        </div>
      </Layout>
    );
  }

  // Function to handle click on news item
  const handleNewsItemClick = (index) => {
    setSelectedArticle(newsData[index]);
  };

  return (
    <Layout>
      <div className="HomePage-parent">
        {selectedArticle ? ( // If an article is selected, render the Article component
          <Article
            article={selectedArticle}
            onClose={() => setSelectedArticle(null)} // Pass a function to close the article
          />
        ) : (
          <div className="parent-hero">
            {newsData.slice(0, 4).map((newsItem, index) => (
              <div
                className="hero"
                key={index}
                style={{ background: `url(${newsItem.image})` }}
                onClick={() => handleNewsItemClick(index)}
              >
                <div className="hero-content">
                  <h4>{newsItem.heading}</h4>
                  <h4>{newsItem.content}</h4>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default HomePage;
