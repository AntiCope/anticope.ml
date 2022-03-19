import React from "react";
import { Link } from "react-router-dom";

import { FaDiscord, FaGithub } from "react-icons/fa";
import "./Header.css";

function Header() {
    return <header className="Header">
        <div className="Logo">
            <Link to="/">
                <img src="/logo.png" alt="logo"/>
            </Link>
        </div>
        <nav className="Nav">
            <a href="https://github.com/AntiCope/anticope.ml/">
                <FaGithub />
            </a>
            <a href="https://discord.gg/9mrRPGKYU3">
                <FaDiscord />
            </a>
        </nav>
    </header>;
}

export default Header