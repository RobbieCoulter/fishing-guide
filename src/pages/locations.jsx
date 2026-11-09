import "./locations.css";
import LocationCard from "../components/locationcard/locationcard";
import { Tooltip } from "react-tooltip";
import { useState, useEffect } from "react";
import axios from "axios";

const Locations = () => {
    const [map, setMap] = useState("");
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://the-anglers-guide-api.onrender.com/api/locations"
            );
            setLocations(response.data);
        })();
    }, []);

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
                <p
                    id="location-instructions"
                    data-tooltip-id="location-tip"
                    data-tooltip-content="Click a location card to view it on Google Maps!"
                >
                    Click a card for the map of the location
                </p>

                <Tooltip id="location-tip" />

                <h2>Saltwater Fishing</h2>

                <div className="locations-row">
                    {locations
                        .filter((location) => location.type === "Saltwater")
                        .map((location) => (
                            <LocationCard
                                key={location._id}
                                name={location.name}
                                showMap={showMap}
                                image={`${import.meta.env.BASE_URL}images/locations/${location.image}`}
                                description={location.description}
                            />
                        ))}
                </div>

                <h2>Freshwater Fishing</h2>

                <div className="locations-row">
                    {locations
                        .filter((location) => location.type === "Freshwater")
                        .map((location) => (
                            <LocationCard
                                key={location._id}
                                name={location.name}
                                showMap={showMap}
                                image={`${import.meta.env.BASE_URL}images/locations/${location.image}`}
                                description={location.description}
                            />
                        ))}
                </div>
            </section>

            {map && (
                <div id="map-modal">
                    <div id="map-modal-content">
                        <button id="map-close" onClick={closeMap}>X</button>
                        <iframe
                            title="Location Map"
                            src={
                                "https://www.google.com/maps?q=" +
                                encodeURIComponent(map + ", South Carolina") +
                                "&output=embed"
                            }
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Locations;