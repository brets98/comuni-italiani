import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import Test from './Test';
import Risultato from './Risultato';
import $ from 'jquery';

const Gioco = () => {

    // ! stati necessari al programma
    const [comuni, setComuni] = useState([]);
    const [rndComune, setRndComune]: any = useState();
    const [showRisultato, setShowRisultato] = useState(false);
    const [regioni, setRegioni] = useState([]);
    const [isCorrect, setisCorrect] = useState(false);



    useEffect(() => {
        const getProvince = async () => {
            const comuniFromServer = await fetchProvincia();
            setComuni(comuniFromServer);
        };
        const getRegioni = async () => {
            const regioniServer = await fetchRegioni();
            setRegioni(regioniServer);
        };

        getProvince();
        getRegioni();
    }, []);


    const check = () => {
        var tentativo = $("[id=risultatoRegioni]").val();
        console.log(tentativo === rndComune.regione);
        setisCorrect(tentativo === rndComune.regione);
    }
    const fetchProvincia = async () => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/province/");
        const data = await res.json();
        return data;
    };
    const fetchRegioni = async () => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/regioni/");
        const data = await res.json();
        return data;
    };


    const getDaIndovinare = () => {
        setisCorrect(false);
        $("[id=risultatoRegioni]").val('');
        setShowRisultato(false);
        var num = (Math.floor(Math.random() * comuni.length))
        var casual: any = comuni[num];
        setRndComune(casual);

    }


    return (
        <div>
            <Row className="mt-3">
                <Col sm={{ span: 4, offset: 2 }} ><Button variant="primary" onClick={getDaIndovinare}>Prova</Button></Col>
                <Col sm={{ span: 4, offset: 2 }}><Button onClick={check}>Mostra rsisultato</Button></Col>

            </Row>
            <Row>
                <Col sm={{ offset: 1 }}><div>{rndComune && <input value={rndComune.nome}></input>}</div></Col>
                <Col sm={{ offset: 1 }}><div><input id="risultatoRegioni" list="regioni" />
                    <datalist id="regioni">
                        {regioni.map((regione: string) => {
                            return (
                                <option value={regione} />
                            )
                        })}
                    </datalist>


                </div></Col>
                {/* // todo qua vorrei implementare una datalist con anche un sistema di punti */}
            </Row>


            <h1> {isCorrect ? "Corretto" : "Sbagliato"} </h1>


        </div>
    )
}

export default Gioco