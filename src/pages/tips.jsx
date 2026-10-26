import "./tips.css";
import TipCard from "../components/tipcard/tipcard";

const Tips = () => {
    return (
        <div id="tips-page" className="page">
            <section id="tips-hero">
                <div id="tips-hero-text">
                    <h1>TIPS AND TRICKS</h1>
                    <p>Improve your skills on the water with practical fishing tips for freshwater and saltwater anglers. Learn how to find fish, choose the right tackle, and adjust your approach to changing conditions.</p>
                </div>
            </section>

            <section id="tips">
                <h2>Saltwater Fishing</h2>

                <div className="tips-row">
                    <TipCard
                        name="Follow the Tides"
                        image={`${import.meta.env.BASE_URL}images/tips/tipstides.png`}
                        description="Tides strongly influence saltwater fish activity. Target creek mouths, points, and flats where moving water funnels baitfish. Adjust your fishing spots with the tide to stay near feeding fish."
                    />

                    <TipCard
                        name="Find Moving Water"
                        image={`${import.meta.env.BASE_URL}images/tips/movingwater.png`}
                        description="Current concentrates bait and creates feeding opportunities. Look for moving water around inlets, bridges, oyster beds, points, and creek mouths where predatory fish can wait for food to pass."
                    />

                    <TipCard
                        name="Match the Bait"
                        image={`${import.meta.env.BASE_URL}images/tips/tipsbait.png`}
                        description="To enhance your fishing success, observe the natural prey in the area. Coastal waters are often rich with shrimp, mullet, menhaden, and small baitfish. Select lures that mimic the size, shape, and movement of these common forage species."
                    />

                    <TipCard
                        name="Fish the Structure"
                        image={`${import.meta.env.BASE_URL}images/tips/tipsstructure.png`}
                        description="Docks, oyster beds, jetties, grass lines, and submerged structure give fish places to feed and hide. Cast along the edges and work your lure through areas where structure meets moving water."
                    />
                </div>

                <h2>Freshwater Fishing</h2>

                <div className="tips-row">
                    <TipCard
                        name="Target Cover"
                        image={`${import.meta.env.BASE_URL}images/tips/tipscover.png`}
                        description="Fish often seek shelter near docks, fallen trees, vegetation, and rocks. Focus your casts precisely around these structures to increase your chances, rather than casting aimlessly over open water."
                    />

                    <TipCard
                        name="Adjust Your Depth"
                        image={`${import.meta.env.BASE_URL}images/tips/tipsdepth.png`}
                        description="Fish do not always stay at the same depth. If you are not getting bites, try fishing deeper or shallower and use different lure weights until you locate active fish."
                    />

                    <TipCard
                        name="Cold Water"
                        image={`${import.meta.env.BASE_URL}images/tips/tipscold.png`}
                        description="Cold water slows fish metabolism and feeding behavior. Use slower retrieves, linger in promising spots, and try smaller lures to entice less active fish."
                    />

                    <TipCard
                        name="Fish Low Light Hours"
                        image={`${import.meta.env.BASE_URL}images/tips/tipslight.png`}
                        description="Early morning, late evening, and overcast skies often trigger more active feeding in shallow waters. These times are particularly fruitful for anglers during the warmer seasons."
                    />
                </div>
            </section>
        </div>
    )
};

export default Tips;

