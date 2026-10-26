import "./navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/species">SPECIES</NavLink>
            <NavLink to="/gear">GEAR</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
            <NavLink to="/tips">TIPS</NavLink>
        </nav>
    )
};

export default Navigation;
