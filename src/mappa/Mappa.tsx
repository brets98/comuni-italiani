import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import Scegliregione from './Scegliregione'
const Mappa = ({id, lat, lng}: {id: string , lat: number, lng:number}) => {
  return (
    <div>
      {/* <Scegliregione /> */}
      <MapContainer id={id} center={[lat, lng]} zoom={8} scrollWheelZoom={false} >
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