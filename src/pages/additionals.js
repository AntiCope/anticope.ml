import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";

import './additionals.css';

function AdditionalsPage() {

    return <article id="aditionals-page">
        <Head title="Additionals" summary="A list of Fabric mods recommended to be used alongside Meteor Client."/>
        <h1>
            A list of Fabric mods recommended to be used alongside Meteor Client.
        </h1>
        <section>
            <h2>Meteor Client Addons</h2>
            Meteor Client has a built-in addon system which allows creation of addons. Addons can modify almost anything in meteor, modules, commands, gui, etc.

            Check out the addons list <Link to="/addons/">here</Link>.
        </section>
        <section>
            <h2>Optifine Alternatives</h2>
            <p>
                Optifine is and never will be supported by Meteor Client. More alternatives and the reason why its not supported <a href="https://lambdaurora.dev/optifine_alternatives" target="_blank">here</a>.
                <h3>Performance</h3>
                <ul>
                    <li><a href="https://modrinth.com/mod/sodium" target="_blank">Sodium</a> - Performance improvements (way better than Optifine)</li>
                    <li><a href="https://modrinth.com/mod/lithium" target="_blank">Lithium</a> - Server optimizations</li>
                    <li><a href="https://modrinth.com/mod/starlight" target="_blank">Starlight</a> - Lighting engine rewrite (better compared to Phosphor)</li>
                    <li><a href="https://modrinth.com/mod/phosphor" target="_blank">Phosphor</a> - Lighting engine improvements</li>
                </ul>
                <h3>Shaders</h3>
                <ul>
                    <li><a href="https://modrinth.com/mod/iris" target="_blank">Iris</a> - Shaders mod for Minecraft compatible with ShadersMod/Optifine shaders. Compatible with a custom modified version of Sodium.</li>
                    <li><a href="https://www.curseforge.com/minecraft/mc-mods/canvas-renderer" target="_blank">Canvas Renderer</a> - A new rendering engine. Incompatible with Sodium</li>
                </ul>
            </p>
        </section>
        <section>
            <h2>Misc</h2>
            <ul>
                <li><a href="https://www.curseforge.com/minecraft/mc-mods/multiconnect" target="_blank">Multiconnect</a> - Allows you to connect to older minecraft versions. Very useful since Meteor only supports latest versions.</li>
                <li><a href="https://github.com/19MisterX98/SeedcrackerX" target="_blank">SeedcrackerX</a> - Fast, Automatic In-Game Seed Cracker for Minecraft.</li>
                <li><a href="https://github.com/Earthcomputer/clientcommands" target="_blank">ClientCommands</a> - Duplicates few features from Meteor Client, but also contains useful features, like cracking rng seed or printing entity data</li>
            </ul>
        </section>
    </article>
}

export default AdditionalsPage
