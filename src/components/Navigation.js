import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { navigate } from "gatsby";
import React from "react";
import SEO from "./seo";

export default function Navigation() {
  return (
    <div>
      <SEO />
      <AppBar position="static">
        <Tabs>
          <Tab label="Blog" onClick={() => navigate("/")} />
          <Tab label="Contacts" onClick={() => navigate("/contacts")} />
        </Tabs>
      </AppBar>
    </div>
  );
}
