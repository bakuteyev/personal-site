import { Container, Paper } from "@material-ui/core";
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



const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    display: "flex",

  },
  media: {
    // height: '100%',
    height: 140,
    // paddingTop: "100%", // 16:9
    width: 140,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "0%",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  cardDetails: {
    flex: 1,
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function PersonalCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { summary } = props;

  return (
    <Card className={classes.root}>


      <Box sx={{ display: 'flex', flexDirection: 'column' }} mb={-1} mt={-1} ml={-1}>
        <CardHeader
          title={
            <div>
              <Typography variant="h5"> {summary.frontmatter.title}</Typography>
            </div>
          }
          avatar={<Avatar src={summary.frontmatter.image} className={classes.media} variant='rounded' />}
          subheader={
            <Box >
              <Typography variant="h6" >
                {summary.frontmatter.position}
              </Typography>
              <Typography variant="body1" component="div" color="textPrimary">
                {summary.excerpt}
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center' }}  mb={-1}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LinkedInIcon />
                  <Link href={`https://www.linkedin.com/in/${summary.frontmatter.linkedin_login}/`}>
                    {summary.frontmatter.linkedin_login}
                  </Link>
                </Box>

                <Box ml={"1%"} sx={{ display: 'flex', alignItems: 'center' }}>
                  <MailIcon />
                  <Link href={`mailto:${summary.frontmatter.mail}`}>
                    {summary.frontmatter.mail}
                  </Link>
                </Box>


                <Box ml={"1%"} sx={{ display: 'flex', alignItems: 'center', }}>
                  <TelegramIcon />
                  <Link href={`https://telegram.me/${summary.frontmatter.telegram_login}`}>
                    {summary.frontmatter.telegram_login}
                  </Link>
                </Box>
                <Box flexGrow={1}></Box>

                <Box sx={{ display: 'flex', alignItems: 'center'}} mt={1} mr={-8}>
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
                </Box>
               
              </Box>
              
            </Box>
            
          }
        />




        <div className={classes.cardDetails}>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <MDXRenderer>{summary.body}</MDXRenderer>
            </CardContent>
          </Collapse>
        </div>
      </Box>




    </Card>
  );
}
