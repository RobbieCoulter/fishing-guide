import "./gearcard.css";

const GearCard = (props) => {
    return (
        <div className="gear-card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
};

export default GearCard;
