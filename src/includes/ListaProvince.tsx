import React from 'react'
import ListaComuni from './ListaComuni'
import { useState, useEffect } from 'react';

const ListaProvince = ({ nomeRegione }: { nomeRegione: string }) => {
    const [province, setProvince] = useState([]);
    const [regione, seRegione] = useState(nomeRegione);


    useEffect(() => {
        const getProvince = async (regione: string) => {
            const provinciaFromServer = await fetchProvinceRegione(regione);

            setProvince(provinciaFromServer);
        };

        getProvince(regione);
    }, []);

    const fetchProvinceRegione = async (regione: string) => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/province/" + regione);
        const data = await res.json();
        return data;
    };
    return (
        <div>
           
            {province.map(({ nome }: { nome: string }) => {
                return (<div key={nome} >
                    <h3> - {nome} [provincia]</h3>
                    <ListaComuni nomeProvincia = {nome}/>

                </div>);
            })}
        </div>
    )
}

export default ListaProvince