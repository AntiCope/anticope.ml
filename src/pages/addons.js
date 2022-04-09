import React, { useEffect, useState } from "react";
import useWindowSize from '../hooks/useWindowSize'
import Fuse from "fuse.js";

import AddonCard from "../components/AddonCard";
import Tooltiped from "../components/Tooltiped";
import Head from "../components/Head";
import Paginator from "../components/Paginator";
import LastUpdate from "../components/LastUpdate";

import './addons.css';
import { FaCheck } from "react-icons/fa";

const fuse = new Fuse([],{
    useExtendedSearch: true,
    includeScore: true,
    shouldSort: false,
    distance: 50,
    keys: [
        {
            name: "name",
            weight: 2.5
        },
        {
            name: "summary",
            weight: 1.25
        },
        "authors",
        {
            name: "id",
            weight: 0.7
        },
        {
            name: "features",
            weight: 0.3
        }
    ]
})

function getWeight(addon) {
    return (
        (addon.verified?0.75:0)
    +   ((addon.boost||0)*2)
    +   (addon.stars*0.04)
    ) || 0
}

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
    }, [per_page, filter])

    function fetchChunk(chunk) {
        if (loadedChunks.includes(chunk)) return;
        setLoadedChunks([...loadedChunks, chunk])
        fetch(`https://raw.githubusercontent.com/AntiCope/anticope.ml/data/addons-${chunk}.json?v=${(new Date()).getTime()}`)
            .then(res => res.json())
            .then(newAddons => {
                setAddons([...addons, ...newAddons])
            })
    }


    function toggleVerified() {
        setFilter({ ...filter, verified: !filter.verified })
        setPage(1)
    }

    let filteredAddons = null
    if (filter.query) {
        fuse.setCollection(addons.filter((addon) => {
            if (!filter.verified) return true;
            return addon.verified
        }))
        filteredAddons = fuse.search(filter.query).sort((a, b) => {
            return (a.score - getWeight(a)) - (b.score - getWeight(b))
        }).map((a) => a.item)
    } else {
        filteredAddons = addons.filter((addon) => {
            if (!filter.verified) return true;
            return addon.verified
        }).sort((a, b) => {
            return getWeight(b) - getWeight(a)
        })
    }


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
            <h4>Last Update: {' '}
                <LastUpdate />
            </h4>
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
            {filteredAddons && filteredAddons.slice((page-1)*per_page, page*per_page).map((addon) => {
                return <AddonCard key={addon.id} addon={addon} />
            })}
        </section>
        <Paginator page={page} lastPage={Math.ceil(filteredAddons.length/per_page)} onChange={(i) => setPage(i)}/>
    </article>
}

export default AddonsPage