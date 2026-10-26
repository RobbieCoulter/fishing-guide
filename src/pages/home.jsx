import HomeHero from "../components/heros/homehero/homehero";
import Explore from "../components/explore/explore";
import About from "../components/about/about";

const Home = () => {
    return (
        <div id="home" className="page">
            <HomeHero />
            <Explore />
            <About />
        </div>
    )
};

export default Home;
