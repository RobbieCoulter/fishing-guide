import "./about.css";

const About = () => {
    return (
        <section id="about">
            <div id="about-picture">
                <img src={`${import.meta.env.BASE_URL}images/homepage/about.jpg`} alt="Lowcountry waterway" />

                <div id="about-text">
                    <h2>WHY FISH SOUTH CAROLINA?</h2>
                    <p>South Carolina offers fishing opportunities for every type of angler. From mountain rivers and large freshwater lakes to coastal marshes and the Atlantic Ocean, there is always somewhere new to fish.</p>
                    <p>The Anglers Guide is here to help you learn about local fish species, choose the right gear, find great fishing locations, and improve your skills on the water.</p>
                </div>
            </div>
        </section>
    )
};

export default About;
