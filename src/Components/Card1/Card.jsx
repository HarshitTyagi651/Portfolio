import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card1">
      <div className="card1-container">
        <div className="card1-left">
          <img src={props.img}/>
        </div>
        <div className="card1-right">
          <h2>{props.title}</h2>
          <p>{props.desc}</p>
          <h3>Tech Stack</h3>
          <ul>
            {
              props.techStack.map((item,i) => {
                return(
                  <li>{item}</li>
                )
              })
            }
          </ul>
          <div className="visit-btns">
            {props.netlifyLink != "" ? (
              <a href={props.netlifyLink} target="_blank">
                <button>Site</button>
              </a>
            ) : null}
            {props.githubLink != "" ? (
              <a href={props.githubLink} target="_blank">
                <button>Code</button>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
