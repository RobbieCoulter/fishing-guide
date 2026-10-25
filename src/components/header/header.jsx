import Navigation from "./navigation";
import "./header.css";
import logo from "../images/logo.png";

function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <img src={logo} alt="Fish logo" />
                <h2>THE ANGLERS GUIDE</h2>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;