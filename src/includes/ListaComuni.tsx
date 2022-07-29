import React from 'react'
import { useState, useEffect } from 'react';
import Mappa from '../mappa/Mappa';
import { Button } from 'react-bootstrap';

const ListaComuni = ({ nomeProvincia }: { nomeProvincia: string }) => {
    const [comuni, setComuni] = useState([]);
    const [provincia, setProvincia] = useState(nomeProvincia);
    const [current, setCurrent] = useState(false);
    const [latitudine, setlatitudine] = useState(0);
    const [longitudine, setlongitudine] = useState(0);



    useEffect(() => {
        const getComuni = async (regione: string) => {
            const comuniFromServer = await fetchComuniProvincia(provincia);

            setComuni(comuniFromServer);
        };

        getComuni(provincia);
    }, []);
    const handleClick = (coordinate: any) => {
        setCurrent(!current);
        setlatitudine(coordinate.lat);
        setlongitudine(coordinate.lng);

    };
    const fetchComuniProvincia = async (provincia: string) => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/comuni/provincia/" + provincia);
        const data = await res.json();
        return data;
    };
    return (
        <div>
            {comuni.map(({ nome, coordinate }: { nome: string, coordinate: any }) => {
                return (<div key={nome}>
                    - - <Button variant="link" onClick={() => handleClick(coordinate)}>{nome}</Button>
                    {current && <Mappa id={nome} lat={latitudine} lng={longitudine} />}
                </div>);
            })}

        </div>
    )
}

export default ListaComuni