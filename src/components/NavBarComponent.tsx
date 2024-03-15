// Kristian made this file

import { VscAccount } from "react-icons/vsc";

const NavBarComponent = () => {
    return (
        <header>
            <div className="logo">
                <a href="/"><img src="./Images/logo1" alt="" /></a>
            </div>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="/" className="nav-link">Hem</a></li>
                    <li><a href="/" className="nav-link">Kategorier</a></li>
                    <li><a href="/" className="nav-link">Veckans tips</a></li>
                    <li><a href="/" className="nav-link">Om oss</a></li>
                    <li><a href="/cocktails" className="nav-link">Cocktails</a></li>
                </ul>
            </nav>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                <VscAccount className="login-icon" />
            </a>
        </header>
    )
}

export default NavBarComponent;