import React, { useState, useRef } from "react";
import Button from './Button'
import Tooltiped from './Tooltiped'

import {
    FaCode,
    FaCheck,
    FaArchive,
    FaBiohazard,
} from "react-icons/fa";
import './AddonCard.css';
import { Modal } from "react-overlays";
import AddonModal from "./AddonModal";

const UNKNOWN_ICON = "/unknown_icon.png"

function BackDrop(props) {
    return <div className="BackDrop" {...props}></div>
}

function formatStrings(strings) {
    if (strings.length === 0) return "";
    else if (strings.length === 1) return strings[0]
    else if (strings.length === 2) return `${strings[0]} and ${strings[1]}`
    else return `${strings.slice(0, -1).join(', ')} and ${strings[strings.length - 1]}`
}

function AddonCard({ addon }) {
    const [active, setActive] = useState(false);
    const ref = useRef(null);

    function onActive() {
        setActive(true);
    }

    // eslint-disable-next-line
    if (!addon || addon == undefined || typeof addon !== "object" || addon.id == undefined) return <></>

    try {
        return <div className={"AddonCard appear" + (active ? " active" : " inactive")} ref={ref}>
            <Modal
                show={active}
                onHide={() => {setActive(false)}}
                renderBackdrop={BackDrop}
                aria-labelledby="modal-label"
            >
                <AddonModal addon={addon} onHide={() => {setActive(false)}} />
            </Modal>

            <div className="Line">
                <img src={addon.icon || UNKNOWN_ICON} alt="icon" className="Icon" />
                <div className="Col">
                    <h3>{addon.name}</h3>
                    {(addon.authors && addon.authors.length > 0) &&
                        <span> by {formatStrings(addon.authors)}</span>
                    }
                </div>
            </div>
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