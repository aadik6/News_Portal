import React from "react";
import { useNewsContext } from "../../context/newsFetcher";
import "./breaking.css";

function Breaking() {
  const { newsData, loading } = useNewsContext();

  // Filter breaking news based on a specific criteria, for example, isBreaking property
  // if (loading) {
  //   return <Loader />;
  // }
  const breakingNews = newsData.filter((news) => news.isBreaking);

  return (
    <div className="breaking-container">
      {breakingNews.length > 0 && (
        <div className="breaking-section">
            <div className="breakingLabel">
            <h4>Breaking News</h4>
          </div>
          <div className="marquee-container">
            <div className="marquee-content">
              {breakingNews.map((news) => (
                <div key={news.id} className="newsHeadings">
                  <h4>{news.heading}</h4>
                </div>
              ))}
            </div>
          </div>
        
        </div>
      )}
    </div>
  );
}

export default Breaking;
