import "./gear.css";
import GearCard from "../components/gearcard/gearcard";

const Gear = () => {
    return (
        <div id="gear" className="page">
            <section id="gear-intro">
                <p>OUTFITTED FOR SUCCESS</p>
                <h1>Gear & Tackle</h1>
                <h3>The right gear makes every fishing trip better. Explore the essential equipment you need to get ready for your next day on the water.</h3>
            </section>

            <section className="gear-cards">
                <GearCard
                    name="Fishing Rods"
                    image={`${import.meta.env.BASE_URL}images/gear/gearrod.png`}
                    description="For freshwater, a 6-7 ft medium rod works well for bass and panfish. For inshore saltwater, try a 7 ft medium-heavy rod for redfish, trout, and flounder."
                />

                <GearCard
                    name="Fishing Reels"
                    image={`${import.meta.env.BASE_URL}images/gear/gearreel.png`}
                    description="A 2500-3000 size spinning reel is a good choice for most freshwater fishing. For saltwater, use a 3000-4000 size reel that can handle larger fish and heavier line."
                />

                <GearCard
                    name="Tackle & Bait"
                    image={`${import.meta.env.BASE_URL}images/gear/geartackle.png`}
                    description="Try worms, crankbaits, and soft plastics for freshwater bass. For saltwater, shrimp, mullet, jig heads, and paddle-tail soft plastics are great choices."
                />

                <GearCard
                    name="Fishing Line"
                    image={`${import.meta.env.BASE_URL}images/gear/gearline.png`}
                    description="Use 8-12 lb line for most freshwater fishing. For inshore saltwater fishing, 15-20 lb braided line with a fluorocarbon leader is a good setup."
                />

                <GearCard
                    name="Fishing Bags"
                    image={`${import.meta.env.BASE_URL}images/gear/gearbag.png`}
                    description="Carry a small tackle bag with extra hooks, weights, lures, and line. For saltwater trips, choose a bag that is easy to clean after being around sand and saltwater."
                />

                <GearCard
                    name="Fishing Accessories"
                    image={`${import.meta.env.BASE_URL}images/gear/gearaccessories.png`}
                    description="Bring pliers, line cutters, a landing net, and polarized sunglasses. For saltwater fishing, also carry fish grips and rinse your gear with fresh water after each trip."
                />
            </section>
        </div>
    )
};

export default Gear;

