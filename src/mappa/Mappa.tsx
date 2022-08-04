import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Scegliregione from './Scegliregione'
import { useParams } from 'react-router-dom'
const Mappa = () => {
  var { coordinate } = useParams();
  var lat: number = Number(coordinate?.split(",")[0]);
  var lng: number = Number(coordinate?.split(",")[1]);

  return (
    <div>
      {/* <Scegliregione /> */}
      <MapContainer id='prova' center={[lat, lng]} zoom={6} scrollWheelZoom={false} >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]}>

        </Marker>

      </MapContainer>

    </div>
  )
}

export default Mappa