import "./locations.css";
import LocationCard from "../components/locationcard/locationcard";
import { Tooltip } from "react-tooltip";
import { useState } from "react";

const Locations = () => {
    const [map, setMap] = useState("");

    const showMap = (location) => {
        setMap(location);
    };

    const closeMap = () => {
        setMap("");
    };

    return (
        <div id="locations-page" className="page">
            <section id="locations-hero">
                <h1>EXPLORE THE BEST<br />PLACES TO FISH</h1>
            </section>

            <section id="locations">
                <p id="location-instructions" data-tooltip-id="location-tip" data-tooltip-content="Click a location card to view it on Google Maps!">Click a card for the map of the location</p>

                <Tooltip id="location-tip" />

                <h2>Saltwater Fishing</h2>

                <div className="locations-row">
                    <LocationCard
                        name="Charleston Harbor"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/charleston.png`}
                        description="Charleston's harbor, creeks, and nearby inlets provide excellent inshore fishing throughout the year. Common catches include redfish, spotted seatrout, flounder, and black drum."
                    />

                    <LocationCard
                        name="Hilton Head"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/hiltonhead.png`}
                        description="Fish the tidal creeks, sounds, and coastal waters surrounding one of South Carolina's best-known barrier islands. Common catches include redfish, spotted seatrout, flounder, and sheepshead."
                    />

                    <LocationCard
                        name="Murrells Inlet"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/murells.png`}
                        description="This coastal inlet offers productive fishing from marsh creeks and jetties to nearshore and offshore waters. Common catches include flounder, redfish, black drum, and Spanish mackerel."
                    />

                    <LocationCard
                        name="Myrtle Beach"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/myrtle.png`}
                        description="Piers, beaches, and offshore waters give anglers a variety of ways to fish along the Grand Strand. Common catches include whiting, pompano, flounder, and Spanish mackerel."
                    />
                </div>

                <h2>Freshwater Fishing</h2>

                <div className="locations-row">
                    <LocationCard
                        name="Lake Murray"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/murray.png`}
                        description="A large Midlands reservoir known for excellent bass and striped bass fishing just outside Columbia. Common catches include striped bass, largemouth bass, crappie, and catfish."
                    />

                    <LocationCard
                        name="Lake Marion"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/marion.png`}
                        description="South Carolina's largest lake offers expansive waters, flooded timber, and excellent fishing opportunities. Common catches include catfish, largemouth bass, striped bass, and crappie."
                    />

                    <LocationCard
                        name="Lake Hartwell"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/hartwell.png`}
                        description="This large Upstate reservoir provides miles of shoreline and productive fishing throughout the year. Common catches include largemouth bass, spotted bass, striped bass, and crappie."
                    />

                    <LocationCard
                        name="Chattooga River"
                        showMap={showMap}
                        image={`${import.meta.env.BASE_URL}images/locations/chattooga.png`}
                        description="A scenic mountain river along the South Carolina border known for cold water and excellent trout fishing. Common catches include rainbow trout, brown trout, and brook trout."
                    />
                </div>
            </section>
            {map && (
                <div id="map-modal">
                    <div id="map-modal-content">
                        <button id="map-close" onClick={closeMap}>X</button>
                        <iframe
                            title="Location Map"
                            src={"https://www.google.com/maps?q=" + encodeURIComponent(map + ", South Carolina") + "&output=embed"}
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Locations;
