import "./explore.css";
import ExploreCard from "./explorecard.css";

const Explore = () => {
    return (
        <section id="explore">
            <h2>EVERYTHING YOU NEED IN ONE PLACE</h2>

            <div id="cards">
                <ExploreCard name="SPECIES" image={`${import.meta.env.BASE_URL}images/homepage/species.png`} link="#" />
                <ExploreCard name="GEAR" image={`${import.meta.env.BASE_URL}images/homepage/gear.png`} link="#" />
                <ExploreCard name="LOCATIONS" image={`${import.meta.env.BASE_URL}images/homepage/locations.png`} link="#" />
                <ExploreCard name="TIPS" image={`${import.meta.env.BASE_URL}images/homepage/tips.png`} link="#" />
            </div>
        </section>
    )
};

export default explore;
