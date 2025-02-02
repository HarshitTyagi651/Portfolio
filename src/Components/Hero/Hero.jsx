import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import Wave from 'react-wavify';
import resume from "../../Assets/harshit_resume_frontend.pdf";
import "./Hero.css";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "UI/UX",
      "React Components",
      "Responsive Design",
      "3D Designs",
      "Web Development",
    ],
    loop: true,
    delaySpeed: 1000,
    deleteSpeed: 50,
  });

  const emailAddress = "tyagiharshit651@gmail.com";
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };
  return (
    <div className="hero" id="home-page">
      <h1>Harshit Tyagi</h1>
      <h2>I can help you in -</h2>
      <div>
        <span>{text}</span>
      </div>
      <a>
        <button onClick={handleClick}>HIRE</button>
      </a>
      <a href={resume} download="harshit_resume_forntend">
        <p>Resume</p>
      </a>
      {/* <div className='blue-shadow'></div> */}
      <div className="green-shadow"></div>
      <Wave fill='#fff'
        paused={false}
        style={{ display: 'flex' }}
        options={{
          height: 60,
          amplitude: 20,
          speed: 0.25,
          points: 4
        }}
  />
    </div>
  );
};

export default Hero;
