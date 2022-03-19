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
        <p>
        If you are interested in contributing new features or information to this website, feel free to open a new issue or pull request on our Github repository, or send a message in #addon-verification-requests channel on discord.
        </p>
        <div className="Line">
            <Link to="/addons/">
                <Button>
                    View Addons
                </Button>
            </Link>
            <a href="https://discord.gg/9mrRPGKYU3" target="_blank">
                <Button>
                    Visit Discord
                </Button>
            </a>
        </div>
    </article>
}

export default IndexPage