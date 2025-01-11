import React, { useState, useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Card from "../../component/card/newsCard";
import Article from "../../component/article/article";
import FirebaseErrorCard from "../../component/card/firebaseErrorCard";
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

  if(newsData.length<1){
    return(
      <Layout>
        <FirebaseErrorCard/>
      </Layout>
    )
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
