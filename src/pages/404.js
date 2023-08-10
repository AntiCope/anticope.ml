import { navigate } from 'gatsby'
import React from "react";

const redirects = {
    "/MeteorAddons.html": "/addons/",
    "/addons/UnverifiedAddons.html": "/addons/",
    "UnverifiedAddons.html": "/addons/",
    "/MeteorAdditionals.html": "/additionals/",
    "/Incompatibilities.html": "/incompatibilities/",
    "/faq": "https://meteorclient.com/faq",
    "MeteorFAQ.html": "https://meteorclient.com/faq"
}

function NotFound() {
    if (typeof window === "undefined")
        return <></>;
    var location = window?.location?.pathname
        ?.replace(/\/$/g, "")
        ?.replace(/\/meteor-lists/g, "")
        ?.replace(/\/pages/g, "")
    if (typeof location === "undefined")
        return navigate("/")
    if (typeof redirects[location] !== "undefined")
        return navigate(redirects[location])
    
    return navigate("/")
}

export default NotFound