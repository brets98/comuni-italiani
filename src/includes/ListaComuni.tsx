import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                    {/* <a onClick={prova('ciao')}></a> */}
                    <Link to={`/mappa/${[coordinate.lat , coordinate.lng]}`}>{nome}</Link>
                </div>);
            })}

        </div>
    )
}

export default ListaComuni