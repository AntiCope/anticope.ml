import React from "react";
import {Helmet} from "react-helmet";

function Head({title, summary}) {
    return <Helmet>
        <title>{'AntiCope | '}{title}</title>
        <meta property="og:title" content={"AntiCope | "+title} />
        <meta property="twitter:title" content={"AntiCope | "+title} />
        <meta name="description" content={summary} />
        <meta name="og:description" content={summary} />
    </Helmet>
}

export default Head