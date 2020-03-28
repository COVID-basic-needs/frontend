import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import "./App.css";

import Layout from "./Layout";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Map from "./Map";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicGV0ZXJjcmFja3RoZWNvZGUiLCJhIjoiY2s4YXo0N3MwMDNjbjNvcXVyNWhqd2RkZCJ9.eexbGa1jw1QnZTSRpK2yPg";

const drawerContent = (
  <div>
    <Divider />
    <List>
      {["result", "result", "result", "result"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
);

function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.6777879,
    longitude: -121.75372929999999,
    zoom: 10,
    width: "100vw",
    height: "100vh",
    display: "absolute"
  });
  return (
    <Layout drawerContent={drawerContent}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      />
    </Layout>
  );
}

export default App;
