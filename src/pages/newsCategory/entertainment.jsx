import React from 'react';
import { useState } from 'react';
import { useNewsContext } from '../../context/newsFetcher';
import Loader from '../../component/loader/loader';
import Layout from '../../component/layout/layout';
import Card from '../../component/card/newsCard';
import Article from '../../component/article/article';

function EntertainmentPage() {
  const { newsData, loading } = useNewsContext();
  const [selectedArticle, setSelectedArticle] = useState(null);

  const entertainmentNews = newsData.filter(newsItem => newsItem.category === 'sport');

  if(loading){
    return(
        <>
        <Layout><Loader/></Layout>
        
        </>
    )
  }
  const handleNewsItemClick = (index) => {
    setSelectedArticle(entertainmentNews[index]);
  };

  return (
    <Layout>
      <div className="pageName">Entertainment</div>
      {selectedArticle ? (
        <Article
        article={selectedArticle}
        onClose={()=>setSelectedArticle(null)}
        />
      ):(
        <div className='parent-hero'>    
        {entertainmentNews.slice(0, 4).map((newsItem, index) => (
          <Card
          key={index}
          news={newsItem}
          onClick={()=>handleNewsItemClick(index)}
          />
        ))}
      </div>
      )}
   
    </Layout>
  );
}

export default EntertainmentPage;
