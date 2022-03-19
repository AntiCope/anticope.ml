import React from "react";
import {Helmet} from "react-helmet";

function Head({title, summary}) {
    return <Helmet>
        <title>AntiCope | {title}</title>
        <meta name="description" content={summary} />
    </Helmet>
}

export default Head