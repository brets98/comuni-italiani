import React, { useEffect, useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import $ from 'jquery';
import Datalistregioni from './Datalistregioni';

const Gioco = () => {

    // ! stati necessari al programma
    const [comuni, setComuni] = useState([]);
    const [rndComune, setRndComune]: any = useState();
    const [isCorrect, setisCorrect] = useState(1);



    useEffect(() => {
        const getProvince = async () => {
            const comuniFromServer = await fetchProvincia();
            setComuni(comuniFromServer);
        };

        getProvince();
    }, []);


    const check = () => {
        var tentativo = $("[id=risultatoRegioni]").val();
        console.log(tentativo === rndComune.regione);
        if (tentativo === rndComune.regione) {
            setisCorrect(2);
        }else{
            setisCorrect(3);
        }
    }
    const fetchProvincia = async () => {
        const res = await fetch("https://comuni-ita.herokuapp.com/api/province/");
        const data = await res.json();
        return data;
    };



    const getDaIndovinare = () => {
        setisCorrect(1);
        $("[id=risultatoRegioni]").val('');
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
                <Col sm={{ offset: 1 }}><div><Datalistregioni />



                </div></Col>
                {/* // todo qua vorrei implementare una datalist con anche un sistema di punti */}
            </Row>


            <h1> {isCorrect === 1 ? "Aspetto la risposta . . . " : isCorrect === 2 ? "Corretto" : "Sbagliato"} </h1>


        </div>
    )
}

export default Gioco