import { useState, useEffect } from "react";
import axios from "axios";
import "./gear.css";
import GearCard from "../components/gearcard/gearcard";


const Gear = () => {
    const [reviews, setReviews] = useState([]);
    const [selectedReview, setSelectedReview] = useState(null);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("Rod");
    const [rating, setRating] = useState("5");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
    axios.get("https://the-anglers-guide-api.onrender.com/api/gear")
        .then((response) => {
        setReviews(response.data);
        })
        .catch((error) => {
        console.log(error);
        });
    }, []);

    const addReview = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
        setMessage("Gear name must be at least 3 characters.");
        return;
    }

    if (description.trim().length < 10) {
        setMessage("Description must be at least 10 characters.");
        return;
    }

    const newReview = {
        name: name.trim(),
        category: category,
        rating: Number(rating),
        description: description.trim()
    };

    axios.post("https://the-anglers-guide-api.onrender.com/api/gear", newReview)
        .then((response) => {
            setReviews([...reviews, response.data.review]);

            setName("");
            setCategory("Rod");
            setRating("5");
            setDescription("");
            setMessage("Your review was added successfully!");
        })
        .catch((error) => {
            console.log(error);
            setMessage("There was a problem adding your review.");
        });
};

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

            <section className="gear-reviews">
                <h2>Fishing Gear Reviews</h2>
                <p>See what other anglers think about their favorite fishing gear.</p>

                <div className="reviews-list">
                    {reviews.map((review) => (
                    <div className="review-card" key={review._id} onClick={() => setSelectedReview(review)}>
                        <h3>{review.name}</h3>
                        <p>Category: {review.category}</p>
                        <p>Rating: {review.rating}/5</p>
                        <p>{review.description}</p>
                    </div>
                    ))}
                </div>
            </section>

            <section className="add-review">
                <h2>Add Your Own Gear Review</h2>
                <p>Share your favorite fishing gear with other anglers.</p>
                <form onSubmit={addReview}>
                    <label>Gear Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Example: Penn Battle III" />
                    <label>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} >
                        <option value="Rod">Rod</option>
                        <option value="Reel">Reel</option>
                        <option value="Lure">Lure</option>
                        <option value="Line">Line</option>
                        <option value="Other">Other</option>
                    </select>
                    <label>Rating</label>
                    <select value={rating} onChange={(e) => setRating(e.target.value)} >
                        <option value="5">5 Stars</option>
                        <option value="4">4 Stars</option>
                        <option value="3">3 Stars</option>
                        <option value="2">2 Stars</option>
                        <option value="1">1 Star</option>
                    </select>
                    <label>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Tell us what you think about this gear..." />
                    <button type="submit">Submit Review</button>
                </form>
                <p>{message}</p>
            </section>

            {selectedReview && (
                <div className="review-overlay" onClick={() => setSelectedReview(null)}>
                    <div className="review-modal" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedReview(null)}>X</button>
                        <h2>{selectedReview.name}</h2>
                        <p>Category: {selectedReview.category}</p>
                        <p>Rating: {selectedReview.rating}/5</p>
                        <p>{selectedReview.description}</p>
                    </div>
                </div>
            )}
    </div>
    );
};

export default Gear;

