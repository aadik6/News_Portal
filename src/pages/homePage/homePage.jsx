import React, { useEffect } from "react";
import Layout from "../../component/layout/layout";
import { useNewsContext } from "../../context/newsFetcher";
import Loader from "../../component/loader/loader";
import "../homePage/homePage.css"

function HomePage() {
  const { newsData, loading } = useNewsContext();
  console.log(newsData)
  if (loading) {
    return (
      <Layout>
        <div className="HomePage-parent">
          <Loader />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="HomePage-parent">
        <div className="parent-hero">
          {newsData.slice(0, 4).map((newsItem, index) => (
            <div
              className="hero"
              key={index}
              style={{ backgroundImage: `url(${newsItem.image})` }}
            >
              <div className="hero-content">
                <h4>{newsItem.heading}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
  
}

export default HomePage;
