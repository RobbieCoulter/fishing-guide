import "./home.css";

const Home = () => {
    return (
        <main>
            <section id="hero">
                <div id="hero-text">
                    <p>THE COMPLETE SOUTH CAROLINA GUIDE</p>
                    <h1>FIND YOUR NEXT ADVENTURE</h1>
                    <h3>Learn where to fish, what to catch, and the gear you need to make the most of your time on the water.</h3>
                </div>
            </section>

            <section id="explore">
                <h2>EVERYTHING YOU NEED IN ONE PLACE</h2>

                <div id="cards">
                    <div className="card">
                        <img src="#" alt="redfish" />
                        <a href="#">SPECIES</a>
                    </div>

                    <div className="card">
                        <img src="#" alt="Fishing boat" />
                        <a href="#">GEAR</a>
                    </div>

                    <div className="card">
                        <img src="#" alt="Water" />
                        <a href="#">LOCATIONS</a>
                    </div>

                    <div className="card">
                        <img src="#" alt="Fishing" />
                        <a href="#">TIPS</a>
                    </div>
                </div>
            </section>

            <section id="about">
                <div id="about-picture">
                    <img src="#" alt="Lowcountry waterway" />

                    <div id="about-text">
                        <h2>WHY FISH SOUTH CAROLINA?</h2>
                        <p>South Carolina offers fishing opportunities for every type of angler. From mountain rivers and large freshwater lakes to coastal marshes and the Atlantic Ocean, there is always somewhere new to fish.</p>
                        <p>The Anglers Guide is here to help you learn about local fish species, choose the right gear, find great fishing locations, and improve your skills on the water.</p>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default Home;