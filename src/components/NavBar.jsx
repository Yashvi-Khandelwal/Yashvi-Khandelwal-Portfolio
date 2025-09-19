import { useState } from 'react'

import './NavBar.css'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => {
        setIsOpen(false);
    };
    return (
        <>
            <nav className="navBar">
                <div className="nav_logo">Yashvi's Portfolio</div>
                <div className="nav_items">
                    <ul className='items'>
                        <li><a href="" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="" onClick={handleLinkClick}>About</a></li>
                        <li><a href="" onClick={handleLinkClick}>Experience</a></li>
                        <li><a href="" onClick={handleLinkClick}>Skills</a></li>
                        <li><a href="" onClick={handleLinkClick}>Projects</a></li>
                        <li><a href="" onClick={handleLinkClick}>Contact Me</a></li>
                    </ul>
                </div>

              <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>


            </nav>
        </>
    )
}