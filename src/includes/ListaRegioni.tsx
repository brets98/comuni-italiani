import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Mappa from '../mappa/Mappa';
import ListaComuni from './ListaComuni';
import ListaProvince from './ListaProvince';
import { Link } from 'react-router-dom';
import Mappa_module from '../mappa/Mappa_module';




const ListaRegioni = () => {
  const [regioni, setRegioni] = useState([]);
  const [province, setProvince] = useState([]);
  const [comuni, setComuni] = useState([]);

  const [latitudine, setLatitudine] = useState(41.9);
  const [longitudine, setLongitudine] = useState(12.48);

  useEffect(() => {

    const getComuni = async () => {
      const comuniFromServer = await fetchComuniProvincia();

      setComuni(comuniFromServer);
    };

    getComuni();
  }, []);






  const fetchComuniProvincia = async () => {
    const res = await fetch("https://comuni-ita.herokuapp.com/api/comuni/");
    const data = await res.json();
    return data;
  };

  console.log(comuni);
  return (
    <Row>
      <Col className="scrollable-div">
        {comuni.map(({ nome, coordinate, codiceCatastale }: { nome: string, coordinate: any, codiceCatastale: string }) => {
          return (
            <div key={codiceCatastale}>
              <p>{nome}</p>
            </div>);
        })}
      </Col>

    </Row>
  )
}

export default ListaRegioni