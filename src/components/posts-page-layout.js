import Card from '@material-ui/core/Card';
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import { MDXProvider } from "@mdx-js/react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Navigation from "./Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:20,
    paddingBottom:20,
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(12),
      paddingRight: theme.spacing(12)
    }
  },
}));


export default function PageTemplate({ data: { mdx } }) {
  const classes = useStyles();
  return (
    <div>
      <Navigation />
      <div
        className={classes.root}
      >
          <Card>
            <CardContent>
              <div style={{ padding: "2%" }}>
                <Typography component="h2" variant="h5">
                  {mdx.frontmatter.title}
                </Typography>
                <Typography
                  component="h3"
                  variant="subtitle1"
                  color="textSecondary"
                >
                  {mdx.frontmatter.date }, Anton Bakuteev 
                </Typography>
                <MDXProvider
                  components={{
                    p: (props) => (
                      <Typography {...props} component="p" variant="body1" />
                    ),
                    h1: (props) => (
                      <Typography {...props} component="h1" variant="h1" />
                    ),
                    h2: (props) => (
                      <Typography {...props} component="h2" variant="h2" />
                    ),
                    h3: (props) => (
                      <Typography {...props} component="h3" variant="h3" />
                    ),
                    h4: (props) => (
                      <Typography {...props} component="h4" variant="h4" />
                    ),
                    h5: (props) => (
                      <Typography {...props} component="h5" variant="h5" />
                    ),
                    h6: (props) => (
                      <Typography {...props} component="h6" variant="h6" />
                    ),
                  }}
                >
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </CardContent>
          </Card>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        date
      }
    }
  }
`;
