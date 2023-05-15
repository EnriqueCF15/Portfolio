import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[-12.069634, -77.096847]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[-12.072593, -77.096761]}>
        <Popup>Tadaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Enrique</h3>
        <span>A.k.A EnriqueCF</span>
        <br />
        <span>Location : San Miguel, Lima, Peru</span>
        <br />
        <span>Email: enriquechristian2008@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
