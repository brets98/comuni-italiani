import React from 'react'
import { useState, useEffect } from 'react'
import ListaComuni from './ListaComuni';
import ListaProvince from './ListaProvince';




const ListaRegioni = () => {
  const [regioni, setRegioni] = useState([]);


  useEffect(() => {
    const getRegioni = async () => {
      const regioniFromServer = await fetchRegioni();

      setRegioni(regioniFromServer);
    };

    getRegioni();
  }, []);

  const fetchRegioni = async () => {
    const res = await fetch("https://comuni-ita.herokuapp.com/api/regioni");
    const data = await res.json();
    return data;
  };

  var i: number =0;


  return (
    <div>
      { regioni.map((nome: string) => {
        return (
          <div key={nome} >
            <h1>
              {nome} [regione]
            </h1>
            <ListaProvince  nomeRegione={nome} />

          </div>
        );
      })}
    </div>
  )
}

export default ListaRegioni