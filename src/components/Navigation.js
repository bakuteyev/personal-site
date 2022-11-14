import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { navigate } from "gatsby";
import React from "react";
import Search from "./Search";
import Box from "@material-ui/core/Box";
import { Toolbar } from "@material-ui/core";

export default function Navigation() {
  return (
    <div>
      <AppBar position="static">

      <Toolbar widhth='100%' maxWidth={8000}>

          <Tabs value={false}>
            <Tab label="Blog" value={0} onClick={() => navigate("/")} />
            <Tab label="Contacts" value={0} onClick={() => navigate("/contacts")} />
          </Tabs>
          {/* <Box flexGrow={1}></Box> */}
          <Search />
      </Toolbar>
          
        {/* <Box flexGrow={1}></Box> */}
      </AppBar>
    </div>
  );
}
