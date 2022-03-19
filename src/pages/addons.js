import React, {useEffect, useState} from "react";
import AddonCard from "../components/AddonCard";


import './addons.css';

function AddonsPage() {
    const [addons, setAddons] = useState([]);
    useEffect(() => {
        fetch("/addons.json")
            .then(res => res.json())
            .then(newAddons => {
                setAddons(newAddons)
            })
    }, [])

    return <article id="addons-page">
        <section className="addon-grid">
            {addons.map((addon) => {
                return <AddonCard key={addon.id} addon={addon} />
            })}
        </section>
    </article>
}

export default AddonsPage