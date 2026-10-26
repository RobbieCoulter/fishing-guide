import Navigation from "../navigation/navigation";
import "./header.css";

const Header = () => {
    return (
        <header className="main-header">
            <div className="logo">
                <img src={`${import.meta.env.BASE_URL}images/header/logo.png`} alt="Fish logo" />
                <h2>THE ANGLERS GUIDE</h2>
            </div>
            <Navigation />
        </header>
    )
};

export default Header;

