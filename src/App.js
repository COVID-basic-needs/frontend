import React from "react";
import "./App.css";

import Layout from "./Layout";

import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Map from "./Map";

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
  return (
    <Layout drawerContent={drawerContent}>
      <Map />
    </Layout>
  );
}

export default App;
