import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <button id="toggle" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className={menuOpen ? "nav-links" : "nav-links hide-small"}>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/species">SPECIES</NavLink>
                <NavLink to="/gear">GEAR</NavLink>
                <NavLink to="/locations">LOCATIONS</NavLink>
                <NavLink to="/tips">TIPS</NavLink>
                <NavLink to="/contact">CONTACT</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;
