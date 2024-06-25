import React, { useState } from 'react';
import close from '../../Assets/Images/close.png';
import open from '../../Assets/Images/menu.png';
import './Navbar.css';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open/closed
  const toggleBtnImg = isOpen ? close : open; // Button text based on state

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const emailAddress = 'tyagiharshit651@gmail.com'
  const handleClick = () => {
    const mailtoLink = `mailto:${emailAddress}`;
    window.open(mailtoLink);
  };
  return (
    <div className='navbar'>
      <div className="nav-container">
        <div className="logo">
          <p><span>H</span>arshit <span>T</span>yagi</p>
        </div>
        {/* Menu with conditional visibility and class */}
          <ul className={  isOpen ? "menu-open" : "menu-hidden"}>
            <li className='item'>Home</li>
            <li className='item'>Projects</li>
            <li className='item'>About</li>
            <li className='item'>Skills</li>
          </ul>
        <div className="login-cart">
        <p id='login' onClick={handleClick}>Get in touch</p>
        </div>
        {/* Button to toggle dropdown (visible only on small screens) */}
        <div className="dropdown-toggle" onClick={toggleDropdown}><img className='toggleBtnImg' src={toggleBtnImg} /></div>
      </div>
    </div>
  )
}

export default Navbar;
