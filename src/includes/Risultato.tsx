import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
const Risultato = ({ obj }: { obj: any }) => {


    return (

        <div>
            <div>{obj.regione} </div>
        </div>
    )
}

export default Risultato