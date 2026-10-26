import "./locations.css";
import LocationCard from "../components/locationcard/locationcard";

const Locations = () => {
    return (
        <div id="locations-page" className="page">
            <section id="locations-hero">
                <h1>EXPLORE THE BEST<br />PLACES TO FISH</h1>
            </section>

            <section id="locations">
                <h2>Saltwater Fishing</h2>

                <div className="locations-row">
                    <LocationCard
                        name="Charleston Harbor"
                        image={`${import.meta.env.BASE_URL}images/locations/charleston.png`}
                        description="Charleston's harbor, creeks, and nearby inlets provide excellent inshore fishing throughout the year. Common catches include redfish, spotted seatrout, flounder, and black drum."
                    />

                    <LocationCard
                        name="Hilton Head"
                        image={`${import.meta.env.BASE_URL}images/locations/hiltonhead.png`}
                        description="Fish the tidal creeks, sounds, and coastal waters surrounding one of South Carolina's best-known barrier islands. Common catches include redfish, spotted seatrout, flounder, and sheepshead."
                    />

                    <LocationCard
                        name="Murrells Inlet"
                        image={`${import.meta.env.BASE_URL}images/locations/murells.png`}
                        description="This coastal inlet offers productive fishing from marsh creeks and jetties to nearshore and offshore waters. Common catches include flounder, redfish, black drum, and Spanish mackerel."
                    />

                    <LocationCard
                        name="Myrtle Beach"
                        image={`${import.meta.env.BASE_URL}images/locations/myrtle.png`}
                        description="Piers, beaches, and offshore waters give anglers a variety of ways to fish along the Grand Strand. Common catches include whiting, pompano, flounder, and Spanish mackerel."
                    />
                </div>

                <h2>Freshwater Fishing</h2>

                <div className="locations-row">
                    <LocationCard
                        name="Lake Murray"
                        image={`${import.meta.env.BASE_URL}images/locations/murray.png`}
                        description="A large Midlands reservoir known for excellent bass and striped bass fishing just outside Columbia. Common catches include striped bass, largemouth bass, crappie, and catfish."
                    />

                    <LocationCard
                        name="Lake Marion"
                        image={`${import.meta.env.BASE_URL}images/locations/marion.png`}
                        description="South Carolina's largest lake offers expansive waters, flooded timber, and excellent fishing opportunities. Common catches include catfish, largemouth bass, striped bass, and crappie."
                    />

                    <LocationCard
                        name="Lake Hartwell"
                        image={`${import.meta.env.BASE_URL}images/locations/hartwell.png`}
                        description="This large Upstate reservoir provides miles of shoreline and productive fishing throughout the year. Common catches include largemouth bass, spotted bass, striped bass, and crappie."
                    />

                    <LocationCard
                        name="Chattooga River"
                        image={`${import.meta.env.BASE_URL}images/locations/chattooga.png`}
                        description="A scenic mountain river along the South Carolina border known for cold water and excellent trout fishing. Common catches include rainbow trout, brown trout, and brook trout."
                    />
                </div>
            </section>
        </div>
    )
};

export default Locations;
