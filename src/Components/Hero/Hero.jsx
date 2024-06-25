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
    <div className="hero">
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
          Hello, I have a background in web development and creative design. I have had 1+ years of experience and retain a design degree.
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
