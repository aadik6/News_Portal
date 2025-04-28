import React from "react";

function Card({ news, onClick }) {
  return (
    <div
      className="hero"
      style={{
        background: `url(${news.image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor:"pointer",
      }}
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

