import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

import './index.css';

function IndexPage() {

    return <article id="index-page">
        <h3>
            Welcome to the AntiCope Website!
            Here you can find a list of free and open-source Meteor Client (Minecraft utility client for Fabric) addons as well as other client-side Fabric mods.
        </h3>
        <Link to="/addons/">
            <Button>
                View Addons
            </Button>
        </Link>

    </article>
}

export default IndexPage