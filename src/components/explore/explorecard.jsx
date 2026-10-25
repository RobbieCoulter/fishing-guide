import "./explorecard.css";

const ExploreCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <a href={props.link}>{props.name}</a>
        </div>
    )
};

export default explorecard;
