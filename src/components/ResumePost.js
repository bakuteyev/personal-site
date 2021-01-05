import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
import Collapse from "@material-ui/core/Collapse";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import clsx from "clsx";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    // display: 'flex',
    // maxWidth: "100%",
    // minWidth: "100%",
    // width: "100%",
  },
  cardDetails: {
    flex: 1,
  },

  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },

  titleTypographyProps: { variant: "h1" },
}));

export default function ResumePost(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { post } = props;

  return (
    <Paper className={classes.card}>
      <CardHeader
        avatar={
          <Avatar className={classes.avatar} src={post.frontmatter.image} />
        }
        titleTypographyProps={classes.titleTypographyProps}
        title={
          <div>
            <Typography variant="h6"> {post.frontmatter.title} </Typography>
            <Typography variant="subtitle1">
              {post.frontmatter.position}
            </Typography>
          </div>
        }
        subheader={
          <Box mb={-2}>
            <Typography variant="subtitle1" color="textSecondary">
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  {" "}
                  {post.frontmatter.date}{" "}
                </Grid>
                <Grid item xs={11}>
                  {" "}
                  {post.frontmatter.city}{" "}
                </Grid>
                <Grid item xs={1} jusify={"right"}>
                  {" "}
                  {}{" "}
                </Grid>
              </Grid>
            </Typography>
          </Box>
        }
      />
      <Box mt={-6}>
        <CardActions disableSpacing={false}>
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
        </CardActions>
      </Box>

      <div className={classes.cardDetails}>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <Box mr={2} ml={2}>
            <Typography variant="body1" paragraph>
              <MDXRenderer>{post.body}</MDXRenderer>
            </Typography>
          </Box>
        </Collapse>
      </div>
    </Paper>
  );
}
