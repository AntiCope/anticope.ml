import React from "react";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import IndexPage from ".";
import AddonsPage from "./addons";

function Routing() {
    return <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/addons/" element={<AddonsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
}

export default Routing