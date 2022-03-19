import React, {useState, useRef, useEffect } from "react";

import { FaWindowMinimize } from "react-icons/fa";
import './AddonCard.css';

const UNKNOWN_ICON = "https://anticope.ml/resources/unknown_icon.png"

function AddonCard({addon}) {
    const [active, setActive] = useState(false);
    const ref = useRef(null);
    
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
    }, [ setActive]);

    if (!addon || addon === undefined || addon === {} || typeof addon !== "object") return <></>

    try {
        return <div className={"AddonCard" + (active?" active":" inactive")} ref={ref}>
        {active && 
            <button className="Close" onClick={() => {setActive(false)}}>
                <FaWindowMinimize />
            </button>
        }
        <div className="Line">
            <img src={addon.icon || UNKNOWN_ICON} alt="icon" className="Icon"/>
            <h3>{addon.name}</h3>
        </div>
        <p>
            {addon.summary || ""}
        </p>
        {!active &&
            <div className="bottom" onClick={() => {setActive(true)}}>
                Learn More
            </div>
        }
    </div>
    } catch { // this is how i check for errors in json :troll:
        return <></>
    }
    
}

export default AddonCard;