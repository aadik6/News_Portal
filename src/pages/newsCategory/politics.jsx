import React, { useEffect, useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Layout from "../../component/layout/layout";
import Article from "../../component/article/article";
import Card from "../../component/card/newsCard";

function PoliticsPage() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const politicsNews = newsData.filter( (newsItem) => newsItem.category === "politics"
  );


  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(politicsNews[index]);
  };

  return (
    <Layout>
      <div className="pageName">Politics</div>
      {selectedArticle ? (
        <Article
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      ) : (
        <div className="parent-hero">
          {politicsNews.map((newsItem, index) => (
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

export default PoliticsPage;
