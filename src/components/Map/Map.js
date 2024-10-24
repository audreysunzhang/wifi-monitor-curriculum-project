import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from "leaflet";
import './Map.css'; 
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

export default function Map() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetchAggregatedScores();
  }, []);

  const fetchAggregatedScores = async () => {
    try {
      const response = await fetch("http://localhost:2024/get-aggregated-scores");
      const data = await response.json();
      setLocations(data.results);
    } catch (error) {
      console.error("Error fetching aggregated scores:", error);
    }
  };

  return (
    <MapContainer
      center={[37.8715, -122.2625]} 
      zoom={16}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.latitude, loc.longitude]} className="marker-bounce">
          <Popup>{loc.location}: {loc.aggregate_score.toFixed(2)} WiFi score</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
