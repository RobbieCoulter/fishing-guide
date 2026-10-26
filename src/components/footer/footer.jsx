import "./footer.css";

const Footer = () => {
    return (
        <footer id="main-footer">
            <div id="footer-content">
                <div className="footer-section">
                    <h2>THE ANGLERS GUIDE</h2>
                    <h3>Find Your Next Adventure</h3>
                    <p>Helping South Carolina anglers find fish, explore new waters, and make the most of every fishing trip.</p>
                </div>

                <div className="footer-section">
                    <h3>FISH SOUTH CAROLINA</h3>
                    <p>From freshwater lakes and rivers to coastal marshes and offshore waters, South Carolina has something for every angler.</p>
                </div>

                <div className="footer-section">
                    <h3>STAY CONNECTED</h3>
                    <p>Get outside, explore new waters, and make your next fishing trip your best one yet.</p>

                    <div id="footer-circles">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}images/instagram.jpg`} alt="Instagram" />
                        </a>

                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}images/facebook.png`} alt="Facebook" />
                        </a>

                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                            <img src={`${import.meta.env.BASE_URL}images/youtube.jpg`} alt="YouTube" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
