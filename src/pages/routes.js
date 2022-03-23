import React, { useState, useEffect } from "react";
import {
    Routes,
    Route,
    Navigate,
    useLocation
} from "react-router-dom";

import IndexPage from ".";
import AddonsPage from "./addons";
import AdditionalsPage from "./additionals";
import IncompatibilitiesPage from "./incompatibilities";

import './routes.css';

class Redirect extends React.Component {
    componentDidMount() {
        window.location.replace(this.props.to)
    }

    render() {
        return <></>
    }
}

function Routing() {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransistionStage] = useState("fadeIn");

    useEffect(() => {
        if (location !== displayLocation) setTransistionStage("fadeOut");
    }, [location, displayLocation]);

    return <div className={transitionStage}
        onAnimationEnd={() => {
            if (transitionStage === "fadeOut") {
                setTransistionStage("fadeIn");
                setDisplayLocation(location);
            }
        }}>
        <Routes location={displayLocation}>
            <Route path="/" element={<IndexPage />} />

            <Route path="/addons/" element={<AddonsPage />} />
            <Route path="/additionals/" element={<AdditionalsPage />} />
            <Route path="/incompatibilities/" element={<IncompatibilitiesPage />} />

            <Route path="/pages/MeteorAddons.html" element={<Navigate to="/addons/" />} />
            <Route path="/meteor-lists/pages/MeteorAddons.html" element={<Navigate to="/addons/" />} />

            <Route path="/pages/addons/UnverifiedAddons.html" element={<Navigate to="/addons/" />} />
            <Route path="/meteor-lists/pages/addons/UnverifiedAddons.html" element={<Navigate to="/addons/" />} />

            <Route path="/pages/MeteorAdditionals.html" element={<Navigate to="/additionals/" />} />
            <Route path="/meteor-lists/pages/MeteorAdditionals.html" element={<Navigate to="/additionals/" />} />

            <Route path="/pages/Incompatibilities.html" element={<Navigate to="/incompatibilities/" />} />
            <Route path="/meteor-lists/pages/Incompatibilities.html" element={<Navigate to="/incompatibilities/" />} />

            <Route path="/faq/" element={<Redirect to="https://meteorclient.com/faq" />} />
            <Route path="/pages/MeteorFAQ.html" element={<Redirect to="https://meteorclient.com/faq" />} />
            <Route path="/meteor-lists/pages/MeteorFAQ.html" element={<Redirect to="https://meteorclient.com/faq" />} />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>

}

export default Routing