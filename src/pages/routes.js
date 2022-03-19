import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import IndexPage from ".";
import AddonsPage from "./addons";
import AdditionalsPage from "./additionals";
import IncompatibilitiesPage from "./incompatibilities";

function Routing() {
    return <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/addons/" element={<AddonsPage />} />
        <Route path="/additionals/" element={<AdditionalsPage />} />
        <Route path="/incompatibilities/" element={<IncompatibilitiesPage />} />

        <Route path="/pages/MeteorAddons.html" element={<Navigate to="/addons/" />} />
        <Route path="/meteor-lists/pages/MeteorAddons.html" element={<Navigate to="/addons/" />} />
        <Route path="/pages/MeteorAdditionals.html" element={<Navigate to="/additionals/" />} />
        <Route path="/meteor-lists/pages/MeteorAdditionals.html" element={<Navigate to="/additionals/" />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
}

export default Routing