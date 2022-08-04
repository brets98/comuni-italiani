import React from 'react'
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

const Mappa_module = ({lat, lng}: {lat: number, lng:number}) => {
    return (
        <div>
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

export default Mappa_module