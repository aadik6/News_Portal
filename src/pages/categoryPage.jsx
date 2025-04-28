import React from "react";
import { useState } from "react";
import { useNewsContext } from "../context/newsFetcher";
import Layout from "../components/layout/layout";
import { useParams } from "react-router-dom";
import Article from "../components/article/article";
import Card from "../components/card/newsCard";
import "./style.css";

function NewsCategory() {
  const { categoryName } = useParams();
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categoryNews = newsData.filter(
    (newsItem) => newsItem.category === categoryName
  );

  if (loading) {
    return (
      <Layout>
        <div className="loadin">loading...</div>
        {/* <Loader /> */}
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(categoryNews[index]);
  };

  return (
    <Layout>
      <div className="pageName">{categoryName}</div>
      {selectedArticle ? (
        <Article
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : (
        <div className="parent-hero">
          {categoryNews.map((newsItem, index) => (
            <Card
              key={index}
              news={newsItem}
              onClick={() => handleNewsItemClick(index)}
            />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default NewsCategory;
