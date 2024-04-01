import React from "react";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import Layout from "../../component/layout/layout";
import "./style.css"

function Education() {
  const { newsData, loading } = useNewsContext();

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

  return (
    <Layout>
      <div className="pageName">Education</div>
      <div>
        {educationNews.map((newsItem, index) => (
          <div key={index}>
            <p>{index + 1}</p>
            <h3>{newsItem.heading}</h3>
            <p>{newsItem.description}</p>
            {/* Add other necessary content */}
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Education;
