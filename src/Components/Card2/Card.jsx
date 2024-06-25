import React from "react";
import "./Card.css";

const Card = (props) => {
  const bgImg = {
    backgroundImage: props.img,
  };
  return (
    <div className="card2">
      <div className="skill-name">
        <p>{props.title}</p>
        <img src={props.img}/>
      </div>
      <div className="progress-bar">
        <div className="progress html" style={{ width: `${props.perc}` }}>
          <span className="percentage">{props.perc}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
