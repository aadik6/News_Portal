import React from "react";
import { useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Layout from "../../component/layout/layout";
import Article from "../../component/article/article";
import Card from "../../component/card/newsCard";

function Sport() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const sportNews = newsData.filter(
    (newsItem) => newsItem.category === "sport"
  );

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(sportNews[index]);
  };

  return (
    <Layout>
      <div className="pageName">Sports</div>
      {selectedArticle ? (
        <Article
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : (
        <div className="parent-hero">
          {sportNews.map((newsItem, index) => (
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

export default Sport;
