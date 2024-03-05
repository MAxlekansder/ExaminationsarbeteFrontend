

const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <NavBar />
                <li><a href="/" className="nav-link">Hem</a></li>
                <li><a href="/" className="nav-link">Kategorier</a></li>
                <li><a href="/" className="nav-link">Recept</a></li>
                <li><a href="/" className="nav-link">Om oss</a></li>
            </ul>
        </nav>

    )
}

export default NavBar;