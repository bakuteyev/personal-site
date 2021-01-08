import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { navigate } from "gatsby";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <AppBar position="static">
        <Tabs value={false}>
          <Tab label="Blog" value={0} onClick={() => navigate("/")} />
          <Tab label="Contacts" value={0} onClick={() => navigate("/contacts")} />
        </Tabs>
      </AppBar>
    </div>
  );
}
