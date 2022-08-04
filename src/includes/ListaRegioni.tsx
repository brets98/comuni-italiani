import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Mappa from '../mappa/Mappa';
import ListaComuni from './ListaComuni';
import ListaProvince from './ListaProvince';
import Mappa_module from '../mappa/Mappa_module';




const ListaRegioni = () => {
  const [regioni, setRegioni] = useState([]);
  const [latitudine, setLatitudine] = useState(41.9);
  const [longitudine, setLongitudine] = useState(12.48);

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

  return (
    <Row>
      <Col className="scrollable-div">
        {regioni.map((nome: string) => {
          return (
            <Row key={nome}>
              <Col md={{ span: 6 }}>
                <div>
                  <h1>
                    {nome} [regione]
                  </h1>
                  <ListaProvince nomeRegione={nome} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Col>
      <Col>
        <Mappa_module lat={latitudine} lng={longitudine} />

      </Col>
    </Row>
  )
}

export default ListaRegioni