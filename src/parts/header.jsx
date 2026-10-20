import Navigation from "./navigation";
import "./header.css";

function Header() {
    return (
        <header className="main-header">
            <div className="logo">
                <img src="/images/logo.png" alt="Fish logo" />
                <h2>THE ANGLERS GUIDE</h2>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;