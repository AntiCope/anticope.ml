import React from "react";

import './Tooltiped.sass';

function Tooltiped({children, tooltip}) {
    return <div className="Tooltiped" aria-label={tooltip}>
        {children}
        <span className="TooltipText">{tooltip}</span>
    </div>
}

export default Tooltiped;