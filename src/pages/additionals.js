import Layout from "../components/Layout/Layout";
import Seo from "../components/Seo";
import { Link } from "gatsby";
import React from "react";

function AdditionalsPage() {

    return <Layout>
        <Seo title="Additionals" summary="A list of Fabric mods recommended to be used alongside Meteor Client." />
        <article id="aditionals-page">
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
                    Optifine is not, and never will be supported by Meteor Client. More alternatives and the reason why its not supported <a href="https://lambdaurora.dev/optifine_alternatives">here</a>.
                    <h3>Performance</h3>
                    <ul>
                        <li><a href="https://modrinth.com/mod/sodium">Sodium</a> - Performance improvements (way better than Optifine)</li>
                        <li><a href="https://modrinth.com/mod/lithium">Lithium</a> - Server optimizations</li>
                        <li><a href="https://modrinth.com/mod/starlight">Starlight</a> - Lighting engine rewrite (better compared to Phosphor)</li>
                        <li><a href="https://modrinth.com/mod/nvidium">Nvidium</a> - Experimental mod FOR NVIDIA GPUs ONLY, that massively increases performance, should be compatible with most mods, automatically disables itself if and when shaders are enabled as it does not work with Iris, requires Sodium</li>
                        <li><a href="https://modrinth.com/mod/ebe">Enhanced Block Entities</a> - Improved block entity rendering, significantly faster than vanilla</li>
                        <li><a href="https://modrinth.com/mod/fastanim">FastAnim</a> - Vastly improves entity animation calculations</li>
                        <li><a href="https://modrinth.com/mod/immediatelyfast">Immediately Fast</a> - Improves immediate mode rendering performance</li>
                        <li><a href="https://modrinth.com/mod/no-telemetry">No Telemetry</a> - Just disables Telemetry</li>
                        <li><a href="https://modrinth.com/mod/vmp-fabric">Very Many Players</a> - Improves performance with lots of players online</li>
                        <li><a href="https://modrinth.com/mod/videotape">Video tape</a> - GPU fixes and optimizations</li>
                        <li><a href="https://modrinth.com/mod/moreculling">More Culling</a> - Better culling, Requires Sodium</li>
                        <li><a href="https://modrinth.com/mod/morecullingextra">More Culling Extra</a> - Even more culling</li>
                        <li><a href="https://modrinth.com/mod/modernfix">Modern Fix</a> - General bugfix and optimization mod</li>
                        <li><a href="https://modrinth.com/mod/lazydfu">LazyDFU</a> - Makes minecraft start up faster</li>
                        <li><a href="https://modrinth.com/mod/exordium">Exordium</a> - Renders GUIs, HUD elements, etc. at a lower framerate to speed up world rendering</li>
                        <li><a href="https://modrinth.com/mod/ksyxis">Ksyxis</a> - Speeds up world loading</li>
                        <li><a href="https://modrinth.com/mod/alternate-current">Alternate Current</a> - Speeds up redstone calculations</li>
                        <li><a href="https://modrinth.com/mod/blanket">Blanket</a> - general bugfix mod</li>
                        <li><a href="https://modrinth.com/mod/c2me-fabric">Concurrent Chunk Management Engine</a> - Improve chunkloading performance</li>
                        <li><a href="https://modrinth.com/mod/ferrite-core">FerriteCore</a> - Memory Usage optimizations</li>
                        <li><a href="https://modrinth.com/mod/entityculling">Entity Culling</a> - It's... it's entity culling. That's about it.</li>
                        <li><a href="https://modrinth.com/mod/noxesium">Noxesium</a> - Performance improvements and QOL stuff</li>
                    </ul>
                    <h3>Shaders, Rendering, and Resource Pack features</h3>
                    <ul>
                        <li><a href="https://modrinth.com/mod/iris">Iris</a> - Shaders mod for Minecraft compatible with ShadersMod/Optifine shaders. Compatible with Sodium.</li>
                        <li><a href="https://modrinth.com/mod/canvas">Canvas Renderer</a> - A new rendering engine. Incompatible with Sodium</li>
                        <li><a href="https://modrinth.com/mod/animatica">Animatica</a> - Optifine and MCPatcher animated texture format support</li>
                        <li><a href="https://modrinth.com/mod/indium">Indium</a> - Adds Fabric Rendering API support to sodium, many mods in this section require it</li>
                        <li><a href="https://modrinth.com/mod/optigui">OptiGUI</a> - Optifine format custom GUI texture support</li>
                        <li><a href="https://modrinth.com/mod/entitytexturefeatures">Entity Texture Features</a> - Custom entity texture features with Optifine Parity</li>
                        <li><a href="https://modrinth.com/mod/entity-model-features">Entity Model Features</a> - Custom entity model support with Optifine Parity</li>
                        <li><a href="https://modrinth.com/mod/fabricskyboxes">FabricSkyboxes</a> - Custom skybox support for resource packs</li>
                        <li><a href="https://modrinth.com/mod/fabricskyboxes-interop">FabricSkyboxes Interop</a> - Adds Optifine and MCPatcher format support to FabricSkyboxes</li>
                        <li><a href="https://modrinth.com/mod/fusion-connected-textures">Fusion</a> - Connected Texture support for resource packs</li>
                        <li><a href="https://modrinth.com/mod/lambdynamiclights">LambDynamicLights</a> - Performant smooth dynamic lighting mod</li>
                        <li><a href="https://modrinth.com/mod/vanadium">Vanadium</a> - A Mod that adds support for custom colors in resource packs</li>
                        <li><a href="https://modrinth.com/mod/modern-ui">Modern UI</a> - Adds a modern UI framework, smooth text, emoji support, etc.</li>
                        <li><a href="https://modrinth.com/mod/shimmer!">Shimmer</a> - A Mod that adds rendering features like fantasy bloom and colored lighting</li>
                        <li><a href="https://modrinth.com/mod/bedrodium">Bedrodium</a> - Small mod that stops rendering the very bottom layer of the world (the bottom side of the last layer of bedrock) to increase performance</li>
                    </ul>
                </p>
            </section>
            <section>
                <h2>Misc</h2>
                <ul>
                    <li><a href="https://modrinth.com/mod/viafabricplus">ViaFabricPlus</a> - Allows you to connect to older minecraft versions. Very useful since Meteor only supports latest versions.</li>
                    <li><a href="https://github.com/19MisterX98/SeedcrackerX">SeedcrackerX</a> - Fast, Automatic In-Game Seed Cracker for Minecraft.</li>
                    <li><a href="https://github.com/Earthcomputer/clientcommands">ClientCommands</a> - Duplicates few features from Meteor Client, but also contains useful features, like cracking rng seed or printing entity data</li>
                    <li><a href="https://github.com/Avanatiker/WorldTools">WorldTools</a> - A World Downloader mod for modern versions, supports downloading chunk data, entity data, and block entity data from servers into a single player save</li>
                    <li><a href="https://github.com/Coderx-Gamer/ui-utils">UI Utils</a> - A Dupe hunting mod for inventory GUIs</li>
                    <li><a href="https://github.com/svenar-nl/FabricBlockedServersBypass">Blocked Servers Bypass</a> - Does what the name says, bypasses minecraft's server blacklist</li>
                    <li><a href="https://github.com/JsMacros/JsMacros">JsMacros</a> - A powerful scripting mod for minecraft, has addons to support multiple coding languages</li>
                    <li><a href="https://github.com/Fallen-Breath/fast-ip-ping">Fast IP Ping</a> - greatly speeds up pinging servers when you use an IP address to connect, perfect for use with an addon like Server Seeker</li>
                    <li><a href="https://modrinth.com/mod/stendhal">Stendhal</a> - A great client-sided mod for editing text in books, signs, anvils, etc.</li>
                    <li><a href="https://github.com/Sindercube/Server-Unpacker">Server Unpacker</a> - A server resource pack unpacker, uses minecraft game logic so it bypasses tricks to prevent resource pack unpacking, as long as the game can load it, the mod can unpack it</li>
                    <li><a href="https://github.com/mega12345mega/NBT-Editor">NBT Editor</a> - A useful NBT Editor with a client-sided storage UI to easily save items and retrive them across servers, provided you have creative mode or OP.</li>
                    <li><a href="https://github.com/Thatsmusic99/NoRefreshScroll">NoRefreshScroll</a> - A simple mod to stop the server list from scrolling to the top when refreshing, great for use with server seeker</li>
                    <li><a href="https://github.com/Boxadactle/MCShare">MCShare</a> - Adds a simple and useful system to export and import minecraft worlds, especially useful when used with ServerSeeker and WorldTools</li>
                </ul>
            </section>
        </article>
    </Layout>
}

export default AdditionalsPage
