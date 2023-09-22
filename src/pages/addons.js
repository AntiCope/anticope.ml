import React, { useEffect, useState } from "react";
import useWindowSize from '../hooks/useWindowSize';
import Fuse from "fuse.js";

import AddonCard from "../components/AddonCard/AddonCard";
import Tooltiped from "../components/Tooltiped/Tooltiped";
import Paginator from "../components/Paginator/Paginator";
import LastUpdate from "../components/LastUpdate";
import Seo from "../components/Seo";

import { useQueryString } from "../hooks/useQueryString";
import Layout from "../components/Layout/Layout";
import { FaCheck } from "react-icons/fa";
import { Link } from "gatsby";
import './addons.css';

const fuse = new Fuse([], {
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
        (addon.verified ? 0.75 : 0)
        + ((addon.boost || 0) * 2)
        + (addon.stars * 0.04)
    ) || 0
}

function AddonsPage() {
    const [addons, setAddons] = useState([]);
    const [loadedChunks, setLoadedChunks] = useState([]);
    const [searchQuery, setSearchQuery] = useQueryString("q", null);
    const [verified, setVerified] = useState(true);
    const [page, setPage] = useQueryString("page", 1);
    const size = useWindowSize();
    const per_page = (size.width > 1000) ? 12 : 5;
    
    useEffect(() => {
        fetchChunk('ver')
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        if (!verified) {
            fetchChunk('unver')
        }
        // eslint-disable-next-line
    }, [verified])

    useEffect(() => {
        if (addons.length < 1) return;
        if (page == null) setPage(1)
        setPage(Math.min(page, Math.ceil(addons.length/per_page)))
    }, [per_page, verified, addons])

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
        setVerified(!verified)
        setPage(1)
    }

    let filteredAddons = null
    if (searchQuery) {
        fuse.setCollection(addons.filter((addon) => {
            if (!verified) return true;
            return addon.verified
        }))
        filteredAddons = fuse.search(searchQuery).sort((a, b) => {
            return (a.score - getWeight(a)) - (b.score - getWeight(b))
        }).map((a) => a.item)
    } else {
        filteredAddons = addons.filter((addon) => {
            if (!verified) return true;
            return addon.verified
        }).sort((a, b) => {
            return getWeight(b) - getWeight(a)
        })
    }

    return <Layout>
        <Seo title="Meteor Client Addons" summary="Browse free and open-source Addons that can be used alongside Meteor Client." />
        <article id="addons-page">
            <h3>Browse free and open-source Addons that can be used alongside Meteor Client.</h3>
            <section>
                <p>
                    Meteor has a built-in addon system which allows creation of addons. Addons can modify almost anything in meteor, modules, commands, gui, etc.
                    <br />
                    <br />
                    A list to help newcomers discover free and open-source Meteor Client addons. This repo might not stay for long as an addon marketplace system is being planned.
                    <br />
                    If you are looking for other fabric mods to be used alongside Meteor Client, check <Link to="/additionals/">this list out</Link>.
                    <br />
                    <br />
                    If you looking to get your addon verified, open a new issue or pull request on our <a href="https://github.com/AntiCope/anticope.ml/">Github repository</a>, or send a message in <a href="https://discord.gg/9mrRPGKYU3">#addon-verification-requests</a> channel on discord.
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
                <input onChange={(evt) => { setSearchQuery(evt.target.value.toLowerCase()) }} className="Search" type="text" placeholder="search here..." value={searchQuery} />
                <Tooltiped tooltip="Show verified only">
                    <div className={"CheckBox " + (verified ? " checked" : "")} onClick={toggleVerified}>
                        <FaCheck />
                    </div>
                </Tooltiped>
            </header>
            <section className="addon-grid">
                {filteredAddons && filteredAddons.slice((page - 1) * per_page, page * per_page).map((addon) => {
                    return <AddonCard key={addon.id} addon={addon} />
                })}
            </section>
            <Paginator page={page} lastPage={Math.ceil(filteredAddons.length / per_page)} onChange={(i) => setPage(i)} />
        </article>
    </Layout>
}

export default AddonsPage