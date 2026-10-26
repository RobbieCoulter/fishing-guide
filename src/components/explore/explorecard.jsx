import "./explorecard.css";
import { NavLink } from "react-router-dom";

const ExploreCard = (props) => {
    return (
        <div className="card">
            <img src={props.image} alt={props.name} />
            <NavLink to={props.link}>{props.name}</NavLink>
        </div>
    )
};

export default ExploreCard;
