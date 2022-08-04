import React, { useState } from 'react'
import Datalistregioni from '../includes/Datalistregioni'
import { Button } from 'react-bootstrap'
import $ from 'jquery';
// import { computeHeadingLevel } from '@testing-library/react';
// import { Marker } from 'react-leaflet';
const Scegliregione = () => {

    const [comuni, setComuni] = useState([]);

    const getProvince = async (regione: string) => {
        const regioniServer = await fetchComuni(regione);
        setComuni(regioniServer);
    };
    const fetchComuni = async (regione: string) => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/comuni/" + regione);
        const data = await res.json();
        return data;
    };

    function prendi_regione() {
        var regione: any = $("#risultatoRegioni").val();
        getProvince(regione);

        comuni.forEach(({comune}: {comune: any}) => {
            $("#mappa").append('<Marker position={['+comune.coordinate.lat+','+comune.coordinate.lng+']}></Marker>')
        })
    }
    return (
        <div>
            <Datalistregioni />
            <Button onClick={prendi_regione}>Cerca</Button>
        </div >
    )
}

export default Scegliregione