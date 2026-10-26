import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home";
import Species from "./pages/species";
import Gear from "./pages/gear";
import Locations from "./pages/locations";
import Tips from "./pages/tips";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="species" element={<Species />} />
                    <Route path="gear" element={<Gear />} />
                    <Route path="locations" element={<Locations />} />
                    <Route path="tips" element={<Tips />} />
                </Route>
            </Routes>
        </HashRouter>
    )
};

export default App;

