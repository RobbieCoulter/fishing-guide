import "./locationcard.css";

const LocationCard = (props) => {
    return (
        <div className="location-card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
};

export default LocationCard;
