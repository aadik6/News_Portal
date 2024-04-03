import React from "react";
import { useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Layout from "../../component/layout/layout";
import Card from "../../component/card/newsCard";
import Article from "../../component/article/article";
import "./style.css";

function Education() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const educationNews = newsData.filter(
    (newsItem) => newsItem.category === "education"
  );

  if (loading) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(educationNews[index]);
  };

  return (
    <Layout>
      <div className="pageName">Education</div>
      {selectedArticle ? (
        <Article
        article={selectedArticle}
        onClose={()=>setSelectedArticle(null)}
        />
      ):(
      <div className="parent-hero">
        {educationNews.slice(0, 4).map((newsItem, index) => (
          <Card
            key={index}
            news={newsItem}
            onClick={() => handleNewsItemClick(index)}
          />
        ))}
      </div>

      )
    }
    </Layout>
  );
}

export default Education;
