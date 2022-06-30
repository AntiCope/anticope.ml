import React from "react";

import { Link } from "gatsby";

import { FaDiscord, FaGithub, FaHeart } from "react-icons/fa";
import "./Header.sass";

import logo from "../images/icon.svg"

function Header() {
    return <header className="Header">
        <Link to="/" className="Logo">
            <img src={logo} alt="logo"/>
        </Link>
        <nav className="Nav">
            <a href="https://ko-fi.com/cl0udburst" aria-label="ko-fi">
                <FaHeart />
            </a>
            <a href="https://github.com/AntiCope/anticope.ml/" aria-label="Github">
                <FaGithub />
            </a>
            <a href="https://discord.gg/9mrRPGKYU3" aria-label="Discord">
                <FaDiscord />
            </a>
        </nav>
    </header>;
}

export default Header