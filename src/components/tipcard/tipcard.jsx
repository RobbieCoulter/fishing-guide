import "./tipcard.css";

const TipCard = (props) => {
    return (
        <div className="tip-card">
            <img src={props.image} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
    )
};

export default TipCard;
