import React from "react";
import Head from "../components/Head";

import './incompatibilities.css';

const CLIENTS = [
    ["Inertia Client", "https://inertiaclient.com/"],
    ["Wurst Client", "https://www.wurstclient.net/"],
    ["Aristois Client", "https://aristois.net/"],
    ["Feather Client", "https://feathermc.com/"]
]

function IncompatibilitiesPage() {

    return <article id="Incompatibilities-page">
        <Head title="Incompatibilities" summary="Meteor Client is a fabric mod, and like any other fabric mod, it can have incompatibilities. Here are some of the mods known to be incompatible or cause issues with Meteor."/>
        <h1>
            Incompatibilities
        </h1>
        <p>
            Meteor Client is a fabric mod, and like any other fabric mod, it can have incompatibilities. Here are some of the mods known to be incompatible or cause issues with Meteor.
        </p>
        <section>
            <h2>Clients</h2>
            <ul>
                {CLIENTS.map((client) => {
                    return <li><a href={client[1]} target="_blank" key={client[0]}>{client[0]}</a></li>
                })}
            </ul>
        </section>
        <section>
            <h2>Others</h2>
            <ul>
                <li><a href="https://optifine.net/home">Optifine</a> or <a href="https://www.curseforge.com/minecraft/mc-mods/optifabric">Optifabric</a><br /> As stated in <a href="/pages/MeteorAdditionals.html">additionals</a>, Optifine is and never will be compatible with Meteor. More reasons as to why <a href="https://lambdaurora.dev/optifine_alternatives">here</a></li>
                <li><a href="https://www.curseforge.com/minecraft/mc-mods/origins">Origins</a><br /> The game crashes on start due to a mixin conflict. </li>
                <li><a href="https://www.replaymod.com/">Replay Mod</a><br />Only crashes when opening the replay list. Recording should still be fine.</li>
                <li><a href="https://www.curseforge.com/minecraft/mc-mods/better-mount-hud">Better Mount HUD</a></li>
            </ul>
        </section>
    </article>
}

export default IncompatibilitiesPage
