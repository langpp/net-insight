import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const position: any = [51.505, -0.09];

function Leafletmapss() {
  useEffect(() => {
    console.log("wokeinh");
  }, []);
  return (
    <div>
      <div id="map">
        <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={true}
            className="mapleaflet ht-300"
            id="leaflet1"
            style={{ height: "300px" }}
        >
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        </div>
    </div>
  );
}

export default Leafletmapss;