import React, { useEffect, useState } from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Layout from "../../component/layout/layout";
import Article from "../../component/article/article";
import Card from "../../component/card/newsCard";

function PoliticsPage() {
  const { newsData, loading } = useNewsContext();
  const [sortedNewsData, setSortedNewsData] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const politicsNews = newsData.filter(
      (newsItem) => newsItem.category === "politics"
    );
    if (politicsNews.length > 0) {
      console.log("Original newsData:", politicsNews);
      const sortedData = [...politicsNews]
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
        <Loader />
      </Layout>
    );
  }

  const handleNewsItemClick = (index) => {
    setSelectedArticle(sortedNewsData[index]);
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
          {sortedNewsData.map((newsItem, index) => (
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
