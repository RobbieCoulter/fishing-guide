import { useState } from "react";
import "./slideshow.css";

const Slideshow = () => {
    const images = [
        `${import.meta.env.BASE_URL}images/homepage/species.png`,
        `${import.meta.env.BASE_URL}images/homepage/gear.png`,
        `${import.meta.env.BASE_URL}images/homepage/locations.png`,
        `${import.meta.env.BASE_URL}images/homepage/tips.png`
    ];

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () => {
        if(currentImage === images.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const previousImage = () => {
        if(currentImage === 0) {
            setCurrentImage(images.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    return (
        <section id="slideshow">
            <h2>EXPLORE SOUTH CAROLINA FISHING</h2>

            <div id="slide">
                <button onClick={previousImage}>❮</button>

                <img
                src={images[currentImage]} 
                alt="Fishing slideshow"
                />

                <button onClick={nextImage}>❯</button>
            </div>
        </section>
    );
};

export default Slideshow;