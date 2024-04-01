import React from 'react';
import { useNewsContext } from '../../context/newsFetcher';
import Loader from '../../component/loader/loader';
import Layout from '../../component/layout/layout';

function EntertainmentPage() {
  const { newsData, loading } = useNewsContext();

  // Filter news where category is 'technology'
  const entertainmentNews = newsData.filter(newsItem => newsItem.category === 'sport');

  if(loading){
    return(
        <>
        <Layout><Loader/></Layout>
        
        </>
    )
  }

  return (
    <Layout>
      <div className="pageName">Entertainment</div>
    <div>
      {/* Render technology news here */}
      {entertainmentNews.map((newsItem, index) => (
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

export default EntertainmentPage;
