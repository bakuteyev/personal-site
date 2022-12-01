import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import { red } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";

import TelegramIcon from "@material-ui/icons/Telegram";
import clsx from "clsx";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import ResumeSummary from "./ResumeSummary.js";





const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "100%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "0%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PersonalCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const summary = ResumeSummary()[0].node;
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            AB
          </Avatar>
        }
       
        title={
          <div>
            <Typography variant="h6"> Anton Bakuteev </Typography>
          </div>
        }
        // subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="/images/I.jpg"
        title="Anton Bakuteev"
        style={{paddingLeft: '56.25%'}}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {summary.excerpt}
        </Typography>
        {/* <PersonalInfoTable/> */}
      </CardContent>
      <CardActions>
        <Box mr={"10%"} mb={"-2%"} ml={"5%"}>
          <Typography variant="body1" color="textSecondary" component="div">
            <Grid container spacing={1}>
              <Grid item xs={1} xm={1}>
                <LinkedInIcon />
              </Grid>
              <Grid item xm={5} xs={11}>
                <Box ml={"5%"}>
                  <Link href="https://www.linkedin.com/in/anton-bakuteyev/">
                    anton-bakuteyev
                  </Link>
                </Box>
              </Grid>

              <Grid item xs={1} xm={1}>
                <MailIcon />
              </Grid>
              <Grid item xm={5} xs={11}>
                <Box ml={"5%"}>
                  <Link href="mailto:bakuteyev@gmail.com">
                    bakuteyev@gmail.com
                  </Link>
                </Box>
              </Grid>

         

              <Grid item xs={1} xm={1}>
                <TelegramIcon />
              </Grid>
              <Grid item xm={5} xs={10}>
                <Box ml={"5%"}>
                  <Link href="https://telegram.me/anton_bakuteev">
                    @anton_bakuteev
                  </Link>
                </Box>
              </Grid>
              <Grid item xs={1} xm={1}>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Typography>
        </Box>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography> */}
            <MDXRenderer>{summary.body}</MDXRenderer>
          {/* </Typography> */}
        </CardContent>
      </Collapse>
    </Card>
  );
}
