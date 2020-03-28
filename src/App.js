import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import logo from "./logo.svg";
import "./App.css";

import Map from "./Map";

const MAPBOX_TOKEN= 'pk.eyJ1IjoicGV0ZXJjcmFja3RoZWNvZGUiLCJhIjoiY2s4YXo0N3MwMDNjbjNvcXVyNWhqd2RkZCJ9.eexbGa1jw1QnZTSRpK2yPg';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.6777879,
    longitude: -121.75372929999999,
    zoom: 10,
    width: '100vw',
    height: '100vh',
    display: 'absolute'
  });
  return (
    <div>
      <ReactMapGL {...viewport} mapboxApiAccessToken={MAPBOX_TOKEN} onViewportChange={viewport => {setViewport(viewport);}} />
    </div>
  );
}

export default App;
