import React, { useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Layout from "../../component/layout/layout";
import Loader from "../../component/loader/loader";
import Card from "../../component/card/newsCard";
import Article from "../../component/article/article";

function Technology() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Filter news where category is 'technology'
  const technologyNews = newsData.filter(
    (newsItem) => newsItem.category === "technology"
  );

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(technologyNews[index]);
  };

  return (
    <Layout>
      <div className="pageName ">Technology</div>
      {selectedArticle ? (
        <Article
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : (
        <div className="parent-hero">
          {technologyNews.map((newsItem, index) => (
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

export default Technology;
