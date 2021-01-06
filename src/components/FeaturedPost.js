import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby';
import PropTypes from "prop-types";
import React from "react";


const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

export default function FeaturedPost(props) {
  const classes = useStyles();
  const { post } = props;
  return (
    <Grid item xs={12}>
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                {post.frontmatter.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                { new Date(post.frontmatter.date).toISOString().split("T")[0]}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.excerpt}
              </Typography>
              <Link to={post.frontmatter.slug}> 
                <Typography variant="subtitle1" color="textSecondary">
                  Continue reading... 
                </Typography>
              </Link>
            </CardContent>
          </div>
            <CardMedia
              className={classes.cardMedia}
              component="img"
              title={post.frontmatter.title}
              src={post.frontmatter.image}
            />
        </Card>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
