import React from "react";
import { Link } from "react-router-dom";

import { FaDiscord, FaGithub } from "react-icons/fa";
import "./Header.css";

function Header() {
    return <header className="Header">
        <div className="Logo">
            <Link to="/">
                <img src="/logo.webp" alt="logo"/>
            </Link>
        </div>
        <nav className="Nav">
            <a href="https://github.com/AntiCope/anticope.ml/" target="_blank" aria-label="Github">
                <FaGithub />
            </a>
            <a href="https://discord.gg/9mrRPGKYU3" target="_blank" aria-label="Discord">
                <FaDiscord />
            </a>
        </nav>
    </header>;
}

export default Header