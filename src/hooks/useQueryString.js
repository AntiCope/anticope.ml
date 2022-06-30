import { useState, useCallback } from 'react';
import qs from "query-string";

const setQueryStringWithoutPageReload = qsValue => { 
    if (typeof window === "undefined") return;

    const newurl = window.location.protocol + "//" +
                   window.location.host + 
                   window.location.pathname + 
                   qsValue;
 
    window.history.pushState({ path: newurl }, "", newurl);
};

export const getQueryStringValue = ( 
    key, 
    queryString = (typeof window === "undefined")?"":window.location.search
) => { 
    const values = qs.parse(queryString); 
    return values[key];
};

const setQueryStringValue = ( 
    key, 
    value, 
    queryString = (typeof window === "undefined")?"":window.location.search
 ) => { 
     const values = qs.parse(queryString); 
     let newQsValue = { ...values, [key]: value }
     if (!value) delete newQsValue[key]
     setQueryStringWithoutPageReload(`?${qs.stringify(newQsValue)}`);
 };


export function useQueryString(key, initialValue) {
    const [value, setValue] = useState(getQueryStringValue(key) || initialValue);

    const onSetValue = useCallback(
        newValue => {
            setValue(newValue);
            setQueryStringValue(key, newValue!==initialValue && newValue);
        },
        [key, initialValue]
    );

    if (typeof window === "undefined") return [initialValue, () => {}]

    return [value, onSetValue];
}