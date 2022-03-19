import React, { useState, useRef, useEffect } from "react";
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
    FaGithub
} from "react-icons/fa";
import './AddonCard.css';

const UNKNOWN_ICON = "https://anticope.ml/resources/unknown_icon.png"

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

function AddonCard({ addon }) {
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    function onActive() {
        setActive(true);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setActive(false)
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [setActive]);

    if (!addon || addon == undefined || typeof addon !== "object" || addon.id == undefined) return <></>

    try {
        return <div className={"AddonCard appear" + (active ? " active" : " inactive")} ref={ref}>
            {active &&
                <button className="Close" onClick={() => { setActive(false) }}>
                    <FaWindowMinimize />
                </button>
            }
            <div className="Line">
                <img src={addon.icon || UNKNOWN_ICON} alt="icon" className="Icon" />
                <div className="Col">
                    <h3>{addon.name}</h3>
                    {(addon.authors && addon.authors.length > 0) &&
                        <span> by {formatStrings(addon.authors)}</span>
                    }
                </div>
            </div>
            {active &&
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
                    <hr />
                </div>
            }
            {!active &&
                <div className="Line">
                    {!addon.verified &&
                        <div className="Status">
                            <Tooltiped tooltip="Unverified addon. May contain malware. Proceed with caution!">
                                <FaBiohazard color="#BF616A" />
                            </Tooltiped>
                        </div>
                    }
                    {addon.status.devbuild &&
                        <div className="Status">
                            <Tooltiped tooltip="Addon is avaliable for the latest devbuild of Meteor Client">
                                <FaCode color="#A3BE8C" />
                            </Tooltiped>
                        </div>
                    }
                    {addon.status.release &&
                        <div className="Status">
                            <Tooltiped tooltip="Addon is avaliable for the latest release of Meteor Client">
                                <FaCheck color="#A3BE8C" />
                            </Tooltiped>
                        </div>
                    }
                    {addon.status.archived &&
                        <div className="Status">
                            <Tooltiped tooltip="Addon is archived and read only">
                                <FaArchive color="#BF616A" />
                            </Tooltiped>
                        </div>
                    }
                </div>
            }
            <p>
                {addon.summary || ""}
            </p>
            {(active && addon.features != undefined && addon.features.length > 0 ) &&
                <section className="Features">
                <h4>Features</h4>
                <ul>
                    {(addon.features).map((feat) => {
                        return <li key={feat}>{feat}</li>
                    })}
                </ul>
                </section>
            }
            {active &&
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
            }
            {!active &&
                <div className="bottom">
                    <Button onClick={onActive}>More</Button>
                </div>
            }
        </div>
    } catch { // this is how i check for errors in json :troll:
        return <></>
    }

}

export default AddonCard;