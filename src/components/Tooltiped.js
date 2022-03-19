import React from "react";

import './Tooltiped.css';

function Tooltiped({children, tooltip}) {
    return <div className="Tooltiped" aria-label={tooltip}>
        {children}
        <span className="TooltipText">{tooltip}</span>
    </div>
}

export default Tooltiped;