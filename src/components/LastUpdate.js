import React, {useEffect, useState} from "react";
import TimeAgo from 'timeago-react';

function LastUpdate() {
    const [lastUpdate, setLastUpdate] = useState(null)

    useEffect(() => {
        fetch(`https://api.github.com/repos/AntiCope/anticope.ml/events?per_page=1&v=${(new Date()).getTime()}`)
            .then((r) => r.json())
            .then((r) => {
                setLastUpdate(r[0].created_at)
            })
    }, [])

    return lastUpdate?<TimeAgo datetime={lastUpdate} />:<span>A long time ago</span>
}

export default LastUpdate;
