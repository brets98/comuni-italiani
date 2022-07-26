import React from 'react'
import { useState, useEffect } from 'react';

const ListaComuni = ({ nomeProvincia }: { nomeProvincia: string }) => {
    const [comuni, setComuni] = useState([]);
    const [provincia, setProvincia] = useState(nomeProvincia);


    useEffect(() => {
        const getComuni = async (regione: string) => {
            const comuniFromServer = await fetchComuniProvincia(provincia);

            setComuni(comuniFromServer);
        };

        getComuni(provincia);
    }, []);

    const fetchComuniProvincia = async (provincia: string) => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/comuni/provincia/" + provincia);
        const data = await res.json();
        return data;
    };
    return (
        <div>
            {comuni.map(({ nome, coordinate }: { nome: string, coordinate: any }) => {
                return (<div key={nome}>
                    - - {nome} [ {coordinate.lat} , {coordinate.lng} ]
                </div>);
            })}
        </div>
    )
}

export default ListaComuni