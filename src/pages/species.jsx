import "./species.css";
import SpeciesCard from "../components/speciescard/speciescard";

const Species = () => {
    return (
        <div id="species" className="page">
            <section id="species-hero">
                <div id="species-hero-text">
                    <h1>FISH SPECIES OF SC</h1>
                    <p>Explore popular freshwater and saltwater species found throughout South Carolina and learn where they live, what they eat, and the best techniques for catching them.</p>
                </div>
            </section>

            <section id="species-cards">
                <SpeciesCard
                    name="Largemouth Bass"
                    image={`${import.meta.env.BASE_URL}images/species/bass.png`}
                    description="A popular freshwater gamefish known for aggressive strikes and powerful fights. Found in lakes, ponds, rivers, and reservoirs."
                />

                <SpeciesCard
                    name="Blue Catfish"
                    image={`${import.meta.env.BASE_URL}images/species/catfish.png`}
                    description="A large bottom-dwelling freshwater fish found in rivers, lakes, and reservoirs. South Carolina waters can produce exceptionally large catfish."
                />

                <SpeciesCard
                    name="Rainbow Trout"
                    image={`${import.meta.env.BASE_URL}images/species/trout.png`}
                    description="A colorful freshwater trout found in cool rivers and mountain streams. Known for its distinctive pink stripe and energetic fights."
                />

                <SpeciesCard
                    name="Redfish"
                    image={`${import.meta.env.BASE_URL}images/species/redfish.png`}
                    description="A popular inshore gamefish found around marshes, creeks, flats, and inlets. Known for its bronze color, distinctive tail spot, and powerful fights."
                />

                <SpeciesCard
                    name="Grouper"
                    image={`${import.meta.env.BASE_URL}images/species/grouper.png`}
                    description="A powerful saltwater fish commonly found around reefs, ledges, and offshore structure. Known for its strength, large size, and aggressive strikes."
                />

                <SpeciesCard
                    name="Southern Flounder"
                    image={`${import.meta.env.BASE_URL}images/species/flounder.png`}
                    description="A popular coastal species that hides along sandy and muddy bottoms. Often targeted around inlets, creeks, bays, and estuaries."
                />
            </section>
        </div>
    )
};

export default Species;

