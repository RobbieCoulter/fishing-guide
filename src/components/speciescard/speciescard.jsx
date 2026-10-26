import "./speciescard.css";

const SpeciesCard = (props) => {
    return (
        <div className="fish-card">
            <img src={props.image} alt={props.name} />
            <h2>{props.name}</h2>
            <p>{props.description}</p>
        </div>
    )
};

export default SpeciesCard;
