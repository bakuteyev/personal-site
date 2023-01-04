import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { Link, navigate } from "gatsby";
import React from "react";
import Search from "./Search";
import { Toolbar } from "@material-ui/core";
export default function Navigation() {
  return (
    <div>
      <AppBar position="static">

      <Toolbar widhth='100%' >

          <Tabs value={false}>
            <Tab label="Resume" value={0} onClick={() => navigate("/")} />
            <Tab label="SomeTechnologies" value={1} href="https://sometechnologies.com" />
          </Tabs>
          {/* <Box flexGrow={1}></Box> */}
          {/* <Search /> */}
      </Toolbar>
          
        {/* <Box flexGrow={1}></Box> */}
      </AppBar>
    </div>
  );
}
