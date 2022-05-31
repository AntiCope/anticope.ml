import React from "react";
import Button from "./Button";

import './Paginator.sass';
import { FaArrowLeft, FaAngleDoubleLeft, FaArrowRight,FaAngleDoubleRight } from "react-icons/fa";

function Paginator({page, lastPage, onChange}) {
    if (lastPage < 2) return <></>
    return <div className="Paginator">
        {(page>2) &&
            <Button onClick={() => onChange(1)}><FaAngleDoubleLeft /></Button>
        }
        {(page>1) &&
            <Button onClick={() => onChange(page-1)}><FaArrowLeft /></Button>
        }
        <span className="CurrentPage">{page} / {lastPage}</span>
        {(page<lastPage) &&
            <Button onClick={() => onChange(page+1)}><FaArrowRight /></Button>
        }
        {(page<(lastPage-1)) &&
            <Button onClick={() => onChange(lastPage)}><FaAngleDoubleRight /></Button>
        }
    </div>
}

export default Paginator;