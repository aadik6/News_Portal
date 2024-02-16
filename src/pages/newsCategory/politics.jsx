import React from 'react';
import { useNewsContext } from '../../context/newsFetcher';
import Loader from '../../component/loader/loader';
import Layout from '../../component/layout/layout';

function PoliticsPage() {
  const { newsData, loading } = useNewsContext();

  // Filter news where category is 'technology'
  const technologyNews = newsData.filter(newsItem => newsItem.category === 'politics');

  if(loading){
    return(
        <>
        <Layout><Loader/></Layout>
        
        </>
    )
  }

  return (
    <Layout>
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

export default PoliticsPage;
