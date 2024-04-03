import React from "react";
import "./newsCard.css"

function Card({ news, onClick }) {
  return (
    <div
      className="hero"
      style={{ background: `url(${news.image})` }}
      onClick={onClick}
    >
      <div className="hero-content">
        <h4>{news.heading}</h4>
        <p>{news.content}</p>
      </div>
    </div>
  );
}

export default Card;
