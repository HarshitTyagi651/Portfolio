import React from "react";
import "./Card.css";

const Card = (props) => {
  const bgImg = {
    backgroundImage: props.img,
  };
  return (
    <div className="card2" >
        <div className="card2-comp" style={props.bg}>
        <span>{props.title}</span>
        <div className="ratings">
          <span>Ratings</span>
          <span>7/10</span>
        </div>
        </div>
    </div>
  );
};

export default Card;
