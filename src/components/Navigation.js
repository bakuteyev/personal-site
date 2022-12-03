import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { navigate } from "gatsby";
import React from "react";
import Search from "./Search";
import { Box, Toolbar } from "@material-ui/core";
import { IconButton } from "gatsby-theme-material-ui";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import {
  createStyles,
  alpha,
  makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    subscribe: {
      color: alpha(theme.palette.common.white, 0.65),
      '&:hover': {
        color: alpha(theme.palette.common.white, 0.85),
      },
    }
  }));

export default function Navigation() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">

        <Toolbar widhth='100%' maxWidth={8000}>

          <Tabs value={false}>
            <Tab label="Products" value={0} onClick={() => navigate("/")} />
            <Tab label="Blog" value={0} onClick={() => navigate("/blog")} />
            <Tab label="About Us" value={0} onClick={() => navigate("/contacts")} />
          </Tabs>
          <Search />
          <Box flexGrow={1}></Box>

          <IconButton aria-label="settings" href="https://t.me/SomeTechStuff">
            <NotificationsActiveIcon className={classes.subscribe} />
          </IconButton>
        </Toolbar>

        {/* <Box flexGrow={1}></Box> */}
      </AppBar>
    </div>
  );
}
