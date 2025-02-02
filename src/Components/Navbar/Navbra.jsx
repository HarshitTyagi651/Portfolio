import React, { useState } from 'react';
import close from '../../Assets/Images/close.png';
import img from '../../Assets/Images/harshit.jpeg';
import open from '../../Assets/Images/menu.png';
import './Navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/closed
  const toggleBtnImg = isOpen ? close : open; // Button text based on state

  const handleAboutClick = () => {
    document.getElementById("about-page").scrollIntoView({ behavior: "smooth" });
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClose = () => {
    setIsOpen(false);
  }

  const emailAddress = 'tyagiharshit651@gmail.com'
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="logo">
          <div><div style={{backgroundImage: `url(${img})`}}></div></div>
          <h1>Portfolio</h1>
        </div>
          <ul className={  isOpen ? "menu-open" : "menu-hidden"}>
            <a href='#home-page'><li className='item'  onClick={dropdownClose}>Home</li></a>
            <a href='#projects-page' ><li className='item' onClick={dropdownClose}>Projects</li></a>
            <a href='#about-page' onClick={handleAboutClick}><li className='item' onClick={dropdownClose}>About</li></a>
            <a href='#skills-page'><li className='item' onClick={dropdownClose}>Skills</li></a>
            <a href='#education-page'><li className='item' onClick={dropdownClose}>Education</li></a>
          </ul>
        <button  onClick={handleClick}><span>Get in touch</span></button>
        <div className="dropdown-toggle" onClick={toggleDropdown}><img className='toggleBtnImg' src={toggleBtnImg} /></div>
      </div>
    </div>
  )
}

export default Navbar;
