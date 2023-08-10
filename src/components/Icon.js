import React from "react";

import UNKNOWN_ICON from "../images/unknown_icon.png"

function Icon({src}) {
    let [currentSrc, setCurrentSrc] = React.useState(src);

    const onError = () => {
        setCurrentSrc(UNKNOWN_ICON);
    }

    return <img src={currentSrc} alt="icon" className="Icon" crossOrigin="anonymous" onError={onError} />
}

export default Icon
