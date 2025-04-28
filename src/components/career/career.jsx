import React from "react";
import "./career.css";

const Career = ({ close }) => {
  return (
    <div className="career">
      <div className="careerContainer">
        <h1>Join Our team</h1>
        <p>opps currently there is no any vacancy</p>
      </div>
      <button onClick={close} className="closeBtn">
        Ok
      </button>
    </div>
  );
};

export default Career;
