import React, {useEffect, useState} from "react";
import AddonCard from "../components/AddonCard";
import {compareTwoStrings} from 'string-similarity'

import './addons.css';
import Tooltiped from "../components/Tooltiped";

function AddonsPage() {
    const [addons, setAddons] = useState([]);
    const [loadedChunks, setLoadedChunks] = useState([])
    const [filter, setFilter] = useState({query:"", verified:true});

    useEffect(() => {
        fetchChunk('ver')
    }, [])

    useEffect(() => {
        if (!filter.verified) {
            fetchChunk('unver')
        }
    }, [filter])

    function fetchChunk(chunk) {
        if (loadedChunks.includes(chunk)) return;
        setLoadedChunks([...loadedChunks, chunk])
        fetch(`/addons-${chunk}.json?v=${Math.random()}`)
            .then(res => res.json())
            .then(newAddons => {
                setAddons([...addons, ...newAddons])
            })
    }

    function weight(addon) {
        if (filter.query === "")
            return addon.verified?1:0;
        return (
            compareTwoStrings(filter.query, addon.name.toLowerCase()) 
            + compareTwoStrings(filter.query, addon.authors.join(" ").toLowerCase())*0.6
            + compareTwoStrings(filter.query, addon.summary.toLowerCase())*0.4
            + addon.verified?0.5:0) / 2.5;
    }

    function shouldShow(addon) {
        if (filter.verified && !addon.verified) return false
        if (filter.query !== "") {
            if (compareTwoStrings(filter.query, addon.name.toLowerCase()) < 0.3) {
                if (compareTwoStrings(filter.query, addon.authors.join(" ").toLowerCase()) < 0.4) {
                    if (compareTwoStrings(filter.query, addon.summary.toLowerCase()) < 0.5) {
                        return false
                    }
                }
            }
        }

        return true;
    }

    return <article id="addons-page">
        <header className="Filter">
            <input onChange={(evt) => {setFilter({...filter, query:evt.target.value.toLowerCase()})}} className="Search" type="text" placeholder="search here..." value={filter.query}/>
            <Tooltiped tooltip="Show verified only">
                <input onChange={(evt) => {setFilter({...filter, verified:evt.target.checked})}}  type="checkbox" className="CheckBox" checked={filter.verified} />
            </Tooltiped>
        </header>
        <section className="addon-grid">
            {addons.filter(shouldShow).sort((a,b) => weight(b) - weight(a)).map((addon) => {
                return <AddonCard key={addon.id} addon={addon} />
            })}
        </section>
    </article>
}

export default AddonsPage