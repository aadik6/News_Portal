import React from 'react';
import { useNewsContext } from '../../context/newsFetcher';
import Loader from '../../component/loader/loader';
import Layout from '../../component/layout/layout';

function PoliticsPage() {
  const { newsData, loading } = useNewsContext();

  const politicsNews = newsData.filter(newsItem => newsItem.category === 'politics');

  if(loading){
    return(
        <>
        <Layout><Loader/></Layout>
        
        </>
    )
  }

  return (
    <Layout>
      <div className="pageName">Politics</div>
    <div>
      {/* Render technology news here */}
      {politicsNews.map((newsItem, index) => (
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

export default PoliticsPage;
