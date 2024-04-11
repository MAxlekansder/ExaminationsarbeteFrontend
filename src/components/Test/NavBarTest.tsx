import { MutableRefObject, useRef } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";

import './NavBarTestStyle.css'



const NavBarTest = () => {
    const navRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  

    const showNavBar = () => {
        navRef.current?.classList.toggle("responsive_nav")
    }

  return (
    <header>
      <h3>Not-Mahem</h3>
        <nav ref={navRef}>
            <a href="">Home</a>
            <a href="">Categories</a>
            <a href="">Weakly Tips</a>
            <a href="">Cocktails</a>
            <a href="">About us</a>
        <button className="nav-btn nav-clos-btn" onClick={showNavBar}>
            <FaTimes/>
            </button>
        </nav>
        <button className="nav-btn" onClick={showNavBar}>
            <FaBars/>
        </button>
    </header>
  )
}

export default NavBarTest
