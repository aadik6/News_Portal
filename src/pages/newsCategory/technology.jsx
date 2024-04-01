import React from 'react';
import { useNewsContext } from '../../context/newsFetcher';
import Layout from '../../component/layout/layout';
import Loader from '../../component/loader/loader';


function Technology() {
  const { newsData, error } = useNewsContext();

  // Filter news where category is 'technology'
  const technologyNews = newsData.filter(newsItem => newsItem.category === 'technology');

  if(error){
    return(
        <Layout>
            <Loader/>
        </Layout>
    )
  }

  return (
    <Layout>
      <div className="pageName">Technology</div>
    <div>
      {/* Render technology news here */}
      {technologyNews.map((newsItem, index) => (
        <div key={index}>
          <h3>{newsItem.heading}</h3>
          <p>{newsItem.description}</p>
          {/* Add other necessary content */}
        </div>
      ))}
    </div>
    </Layout>
  );
}

export default Technology;
