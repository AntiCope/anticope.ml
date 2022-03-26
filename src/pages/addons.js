import React, { useEffect, useState } from "react";
import useWindowSize from '../hooks/useWindowSize'

import AddonCard from "../components/AddonCard";
import { compareTwoStrings } from 'string-similarity'

import './addons.css';
import Tooltiped from "../components/Tooltiped";
import { FaCheck } from "react-icons/fa";
import Head from "../components/Head";
import Paginator from "../components/Paginator";

function AddonsPage() {
    const [addons, setAddons] = useState([]);
    const [loadedChunks, setLoadedChunks] = useState([]);
    const [filter, setFilter] = useState({ query: "", verified: true });
    const [page, setPage] = useState(1);
    const size = useWindowSize();
    const per_page = (size.width>1000)?12:5;

    useEffect(() => {
        fetchChunk('ver')
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!filter.verified) {
            fetchChunk('unver')
        }
        // eslint-disable-next-line
    }, [filter])

    useEffect(() => {
        setPage(1)
    }, [per_page])

    function fetchChunk(chunk) {
        if (loadedChunks.includes(chunk)) return;
        setLoadedChunks([...loadedChunks, chunk])
        fetch(`https://raw.githubusercontent.com/AntiCope/anticope.ml/data/addons-${chunk}.json?v=${Math.random()}`)
            .then(res => res.json())
            .then(newAddons => {
                setAddons([...addons, ...newAddons])
            })
    }

    function weight(addon) {
        try {
            if (filter.query == "") {
                return (addon.verified ? 1 : 0) + (addon.boost * 2 || 0) + (addon.stars / 150);
            }
            return (
                (compareTwoStrings(filter.query, addon.name.toLowerCase()) * 2)
                    + (compareTwoStrings(filter.query, addon.authors.join(" ").toLowerCase()) * 0.2)
                    + (compareTwoStrings((addon.summary || "").toLowerCase(), filter.query) * 0.1)
                    + (addon.boost * 2 || 0)
                    + addon.verified ? 0.5 : 0) / 2.5;
        } catch {
            return 0;
        }

    }

    function shouldShow(addon) {
        try {
            if (filter.verified && !addon.verified) return false
            if (filter.query !== "") {
                if (compareTwoStrings(filter.query, addon.name.toLowerCase()) < 0.3) {
                    if (compareTwoStrings(filter.query, addon.authors.join(" ").toLowerCase()) < 0.4) {
                        if (compareTwoStrings(filter.query, (addon.summary || "").toLowerCase()) < 0.5) {
                            return false
                        }
                    }
                }
            }
        } catch {
            return false;
        }


        return true;
    }

    function toggleVerified() {
        setFilter({ ...filter, verified: !filter.verified })
        setPage(1)
    }

    let filteredAddons = addons.filter(shouldShow).sort((a, b) => {
        return weight(b) - weight(a);
    });

    return <article id="addons-page">
        <Head title="Meteor Client Addons" summary="Browse free and open-source Addons that can be used alongside Meteor Client." />
        <h3>Browse free and open-source Addons that can be used alongside Meteor Client.</h3>
        <section>
            <p>
                A list to help newcomers discover free and open-source Meteor Client addons. This repo might not stay for long as an addon marketplace system is being planned.
                <br />If you are looking for other fabric mods to be used alongside Meteor Client, check this list out
                <br />If you looking to get your addon verified, open a new issue or pull request on our <a href="https://github.com/AntiCope/anticope.ml/" target="_blank">Github repository</a>, or send a message in <a href="https://discord.gg/9mrRPGKYU3" target="_blank">#addon-verification-requests</a> channel on discord.
            </p>
            <h3>Sidenote</h3>
            <p>
                If an addon has multiple .jar files avaliable for download, do not use files ending with <code>-dev.jar</code> or <code>-sources.jar</code> as they won't work.
            </p>
        </section>
        <hr />
        <header className="Filter">
            <input onChange={(evt) => { setFilter({ ...filter, query: evt.target.value.toLowerCase() }) }} className="Search" type="text" placeholder="search here..." value={filter.query} />
            <Tooltiped tooltip="Show verified only">
                <div className={"CheckBox " + (filter.verified ? " checked" : "")} onClick={toggleVerified}>
                    <FaCheck />
                </div>
            </Tooltiped>
        </header>
        <section className="addon-grid">
            {filteredAddons.slice((page-1)*per_page, page*per_page).map((addon) => {
                return <AddonCard key={addon.id} addon={addon} />
            })}
        </section>
        <Paginator page={page} lastPage={Math.ceil(filteredAddons.length/per_page)} onChange={(i) => setPage(i)}/>
    </article>
}

export default AddonsPage