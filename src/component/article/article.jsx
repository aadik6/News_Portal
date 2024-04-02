import React from "react";
import "./article.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook , faXTwitter, faSquareWhatsapp} from '@fortawesome/free-brands-svg-icons';

function Article({ article, onClose }) {
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, "_blank");
  };


  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(article.heading)}`, "_blank");
  };

  const shareOnWhatsapp = () =>{
    window.open(`https://web.whatsapp.com://send?text=${article.heading}`,"_blank")
  }


  return (
    <div className="article-overlay">
      <div className="article-modal">
        <button className="Back-btn" onClick={onClose}>
          Back
        </button>
        <h2>{article.heading}</h2>
        <img src={article.image} alt={article.heading} />
        {/* <div className="image-container" style={{ backgroundImage: `url(${article.image})` }}></div> */}
        <p className="description">{article.description}</p>

        <div className="share-buttons">
          <h2>Share to social media</h2>
          <div className="socialMediaIcons">
          <FontAwesomeIcon icon={faFacebook} onClick={shareOnFacebook} />
          <FontAwesomeIcon icon={faXTwitter} onClick={shareOnTwitter}/>
          <FontAwesomeIcon icon={faSquareWhatsapp} onClick={shareOnWhatsapp}/>
          </div>
        </div>
      </div>

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={article.heading} />
      <meta property="og:description" content={article.description} />
      <meta property="og:image" content={article.image} />
    </div>
  );
}

export default Article;
