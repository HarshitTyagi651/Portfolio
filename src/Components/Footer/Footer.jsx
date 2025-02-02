import React, { useState } from "react";
import close from "../../Assets/Images/close.png";
import email from "../../Assets/Images/email.png";
import github from "../../Assets/Images/github.png";
import instagram from "../../Assets/Images/instagram.png";
import linkedin from "../../Assets/Images/linkedin.png";
import phone from "../../Assets/Images/phone-call.png";
import twitter from "../../Assets/Images/twitter.png";
import "./Footer.css";

const Footer = () => {
  const [display, setDisplay] = useState(true);
  const [button, setButton] = useState("close");
  const [animationRotate, setAnimationRotate] = useState('rotateBack');
  const [animationMove, setAnimationMove] = useState("moveLeft");
  const handleClose = () => {
    if (button === "close") {
      setDisplay(false);
      setButton("open");
      setAnimationRotate("rotate");
      setAnimationMove("moveRight");
    } else {
      setDisplay(true);
      setButton("close");
      setAnimationRotate("rotateBack");
      setAnimationMove("moveLeft");
    }
  };
  console.log(animationRotate);
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="contact-info">
          <p>
            <img src={email} />
            tyagiharshit651@gmail.com
          </p>
          <div></div>
          <p>
            <img src={phone} />
            91+ 7906875030
          </p>
        </div>
        <div className="fixed-media">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/harshit-tyagi-a44b05263/"
              className={animationMove}
            >
              <div style={{backgroundImage: `url(${linkedin})`}}></div>
            </a>
            <a
              href="https://github.com/HarshitTyagi651"
              className={animationMove}
            >
              <div style={{backgroundImage: `url(${github})`}}></div>
            </a>
            <a href="https://x.com/harxit_tyagi" className={animationMove}>
            <div style={{backgroundImage: `url(${twitter})`}}></div>
            </a>
            <a
              href="https://www.instagram.com/harxit1.0?igsh=MWYzNDF6emJqcGZwaw=="
              className={animationMove}
            >
              <div style={{backgroundImage: `url(${instagram})`}}></div>
            </a>
          </div>
          <button onClick={handleClose}>
            <img src={close} className={animationRotate} />
          </button>
        </div>
        <p>Made with ❤️ by Harshit Tyagi</p>
      </div>
    </div>
  );
};

export default Footer;
