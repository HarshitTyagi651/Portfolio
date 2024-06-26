import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import "./Hero.css";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["UI/UX", "React Components", "Responsive Design"],
    loop: true,
    delaySpeed: 1000,
    deleteSpeed: 50,
  });

  const emailAddress = 'tyagiharshit651@gmail.com'
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };
  return (
    <div className="hero" id='home-page'>
      <div className="hero-container">
        <h1>
          <span>H</span>arshit <span>T</span>yagi
        </h1>
      </div>
      <div className="hero-bottom">
        <div className="hero-left">
            <button onClick={handleClick}>Hire</button>
        </div>
        <div className="hero-right">
          <p className="hero-typewriter">
          I'm a full-stack web developer passionate about crafting beautiful, user-friendly experiences on the web. I bring ideas to life, from design to functionality, and love collaborating to build innovative solutions.
          </p>
          <div>
          <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
