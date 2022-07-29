import React from 'react'
import { useState, useEffect } from 'react';

const Datalistregioni = () => {

    const [regioni, setRegioni] = useState([]);

    useEffect(() => {

        const getRegioni = async () => {
            const regioniServer = await fetchRegioni();
            setRegioni(regioniServer);
        };

        getRegioni();
    }, []);
    const fetchRegioni = async () => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/regioni/");
        const data = await res.json();
        return data;
    };
    return (
        <div><input id="risultatoRegioni" list="regioni" />
            <datalist id="regioni">
                {regioni.map((regione: string) => {
                    return (
                        <option key={regione} value={regione} />
                    )
                })}
            </datalist></div>
    )
}

export default Datalistregioni