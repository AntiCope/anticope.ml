import React, { useState, useEffect } from "react";
import Button from './Button'
import Tooltiped from './Tooltiped'

import {
    FaWindowMinimize,
    FaCode,
    FaCheck,
    FaArchive,
    FaBiohazard,
    FaDiscord,
    FaLink,
    FaGithub,
    FaStar,
    FaCalendarAlt
} from "react-icons/fa";
import './AddonModal.css';
import moment from "moment";

const UNKNOWN_ICON = "/unknown_icon.png"

function formatStrings(strings) {
    if (strings.length === 0) return "";
    else if (strings.length === 1) return strings[0]
    else if (strings.length === 2) return `${strings[0]} and ${strings[1]}`
    else return `${strings.slice(0, -1).join(', ')} and ${strings[strings.length - 1]}`
}

function getIcon(type) {
    switch (type) {
        case "discord": return <FaDiscord />
        default: return <FaLink />
    }
}

function AddonModal({ addon, onHide }) {
    return <div className={"AddonModal appear"}>
        <button className="Close" onClick={() => { onHide() }}>
            <FaWindowMinimize />
        </button>
        <div className="Line">
            <img src={addon.icon || UNKNOWN_ICON} alt="icon" className="Icon" />
            <div className="Col">
                <h3 id="modal-label">{addon.name}</h3>
                {(addon.authors && addon.authors.length > 0) &&
                    <span> by {formatStrings(addon.authors)}</span>
                }
            </div>
        </div>
        <div className="Col">
            {!addon.verified &&
                <div className="Status">
                    <span>
                        <FaBiohazard color="#BF616A" />
                        {' '}Unverified addon. May contain malware. Proceed with caution!</span>
                </div>
            }
            {addon.status.devbuild &&
                <div className="Status">
                    <span>
                        <FaCode color="#A3BE8C" />
                        {' '}Addon is avaliable for the latest devbuild of Meteor Client
                    </span>
                </div>
            }
            {addon.status.release &&
                <div className="Status">
                    <span>
                        <FaCheck color="#A3BE8C" />
                        {' '}Addon is avaliable for the latest release of Meteor Client
                    </span>
                </div>
            }
            {addon.status.archived &&
                <div className="Status">
                    <span>
                        <FaArchive color="#BF616A" />
                        {' '}Addon is archived and read only
                    </span>
                </div>
            }
            {(addon.stars>0) &&
                <div className="Status">
                    <span>
                        <FaStar color="#EBCB8B" />
                        {' '} {addon.stars}{' '}Github stars
                    </span>
                </div>
            }
            {addon.last_update &&
                <div className="Status">
                    <span>
                        <FaCalendarAlt />
                        {' '}Last update:{' '}{moment.utc(addon.last_update).local().startOf('seconds').fromNow()}
                    </span>
                </div>
            }
            <hr />
        </div>
        <p>
            {addon.summary || ""}
        </p>
        {(addon.features != undefined && addon.features.length > 0) &&
            <section className="Features">
                <h4>Features</h4>
                <ul>
                    {(addon.features).map((feat) => {
                        return <li key={feat}>{feat}</li>
                    })}
                </ul>
            </section>
        }
        <div className="Line appear centered">
            <a href={addon.links.github} target="_blank">
                <Button>
                    <FaGithub style={{ marginRight: '0.6rem' }} />
                    Repository
                </Button>
            </a>
            <div className="IconLinks">
                {Object.keys(addon.links).map((key) => {
                    if (key === "github") return <></>
                    else {
                        return <Tooltiped key={key} tooltip={key}>
                            <a href={addon.links[key]} target="_blank">{getIcon(key)}</a>
                        </Tooltiped>
                    }
                })}
            </div>
        </div>
    </div>

}

export default AddonModal;