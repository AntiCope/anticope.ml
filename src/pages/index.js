import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Head from "../components/Head";

import './index.css';

function IndexPage() {

    return <article id="index-page">
        <Head title={"Home"}/>
        <h3>
            Welcome to the AntiCope Website!
            Here you can find a list of free and open-source Meteor Client (Minecraft utility client for Fabric) addons as well as other client-side Fabric mods.
        </h3>
        <p>
        If you are interested in contributing new features or information to this website, feel free to open a new issue or pull request on our Github repository, or send a message in <a href="https://discord.gg/9mrRPGKYU3" target="_blank">#addon-verification-requests channel</a> on discord.
        </p>
        <div className="Line centered">
            <Link to="/addons/">
                <Button>
                    View Addons
                </Button>
            </Link>
            <Link to="/additionals/">
                <Button>
                    View Additionals
                </Button>
            </Link>
            <Link to="/incompatibilities/">
                <Button>
                    View Incompatibilities
                </Button>
            </Link>
            <a href="https://discord.gg/9mrRPGKYU3" target="_blank">
                <Button>
                    Visit Discord
                </Button>
            </a>
        </div>
        <br />
        <section>
            <ul>
                <li><Link to="/addons/">Addons</Link> is a list of addons to be used alongside Meteor Client.</li>
                <li><Link to="/additionals/">Additionals</Link> is a list of recommended fabric mods to be used alongside Meteor Client.</li>
                <li><Link to="/incompatibilities/">Incompatibilities</Link> is a list of fabric mods known to be incompatible with Meteor Client.</li>
            </ul>
        </section>
    </article>
}

export default IndexPage