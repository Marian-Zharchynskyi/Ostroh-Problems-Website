import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CityMap = () => {
  const [position, setPosition] = useState(null);

  const MapClickHandler = () => {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={[50.3296, 26.5146]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
      maxBounds={[
        [50.3196, 26.5046],
        [50.3396, 26.5246],
      ]}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapClickHandler />
      {position && <Marker position={position} />}
    </MapContainer>
  );
};

export default CityMap;
