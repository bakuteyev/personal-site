import { Box, CardActions } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby';
import PropTypes from "prop-types";
import React from "react";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: 'column',
    height: '100%'
  },
  cardDetails: {
    flex: 1,
    flexGrow: 1,
  },
  cardMedia: {
    width: '100%',
  },
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const { project } = props;
  return (
        <Card className={classes.card}>
        <CardMedia
              className={classes.cardMedia}
              component="img"
              title={project.frontmatter.title}
              src={project.frontmatter.image}
            />
          {/* <div > */}
            <CardContent className={classes.cardDetails}>
              <Typography component="h2" variant="h5">
                {project.frontmatter.title}
              </Typography>
              {/* <Typography variant="subtitle1" color="textSecondary">
                { new Date(project.frontmatter.date).toISOString().split("T")[0]}
              </Typography> */}
              <Typography variant="subtitle1" paragraph>
                {project.excerpt}
              </Typography>
              {/* <Link to={project.frontmatter.slug}> 
                <Typography variant="subtitle1" color="textSecondary">
                  Read more... 
                </Typography>
              </Link> */}
            </CardContent>
            <CardActions>
                    <Button size="small">Read more...</Button>
                    <Box flexGrow={1}></Box>

                    <Button size="small" variant="outlined">Open</Button>
            </CardActions>
          {/* </div> */}
            
        </Card>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.object,
};
