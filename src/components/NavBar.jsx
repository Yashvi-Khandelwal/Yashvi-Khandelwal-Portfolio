import { useState } from 'react';
import "./NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navBar">
      <div className="nav_logo">Yashvi's Portfolio</div>

      <div
        className="hamburger"
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <AiOutlineClose size={30} /> : <GiHamburgerMenu size={30} />}
      </div>

      <div className={`nav_items ${isOpen ? "open" : ""}`}>
        <ul className="items">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </nav>
  );
};
