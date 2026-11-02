import HomeHero from "../components/heros/homehero/homehero";
import Explore from "../components/explore/explore";
import About from "../components/about/about";
import Slideshow from "../components/slideshow/slideshow";

const Home = () => {
    return (
        <div id="home" className="page">
            <HomeHero />
            <Explore />
            <Slideshow />
            <About />
        </div>
    );
};

export default Home;
