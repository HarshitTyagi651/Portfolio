import React from "react";
import "./Card.css";

const Card = (props) => {
  const bgImg = {
    backgroundImage: props.img,
  };
  return (
    <a href={props.link}>
      <div className="card1">
      <img src={props.img} />
      <p>{props.title}</p>
      <p><span>{props.tech}</span></p>
    </div>
    </a>
  );
};

export default Card;
