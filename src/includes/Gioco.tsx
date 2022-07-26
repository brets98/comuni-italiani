import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Test from './Test';
import Risultato from './Risultato';


const Gioco = () => {

    // ! stati necessari al programma
    const [comuni, setComuni] = useState([]);
    const [rndComune, setRndComune]: any = useState();
    const [showRisultato, setShowRisultato] = useState(false);

    const handleClick = () => {
        setShowRisultato(!showRisultato);
    };

    useEffect(() => {
        const getComuni = async () => {
            const comuniFromServer = await fetchComuniProvincia();
            setComuni(comuniFromServer);
        };

        getComuni();
    }, []);

    const fetchComuniProvincia = async () => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/province/");
        const data = await res.json();
        return data;
    };

    const getDaIndovinare = () => {
        setShowRisultato(false);
        var num = (Math.floor(Math.random() * comuni.length))
        var casual: any = comuni[num];
        setRndComune(casual);

    }


    return (
        <div>
            <Button variant="primary" onClick={getDaIndovinare}>Prova</Button>

            <div>{rndComune && <h1>{rndComune.nome}</h1>}</div>

            <Button onClick={handleClick}>Mostra rsisultato</Button>

            <div>{showRisultato && <h1>{rndComune.regione}</h1>}</div>

        </div>
    )
}

export default Gioco