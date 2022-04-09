import React, {useEffect, useState} from "react";
import moment from "moment";

function LastUpdate() {
    const [lastUpdate, setLastUpdate] = useState("A long time ago")

    useEffect(() => {
        fetch(`https://api.github.com/repos/AntiCope/anticope.ml/actions/runs?per_page=1&status=success&branch=data&v=${(new Date()).getTime()}`)
            .then((r) => r.json())
            .then((r) => {
                setLastUpdate(moment.utc(r.workflow_runs[0].updated_at).local().startOf('seconds').fromNow())
            })
    }, [])

    return <span>{lastUpdate}</span>
}

export default LastUpdate;