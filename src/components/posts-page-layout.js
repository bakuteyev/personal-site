import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Link } from "gatsby";
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Navigation from './Navigation';




export default function PageTemplate({ data: { mdx } }) {
  return (
    <div>
      <Navigation/>
      <div style={{
                    paddingLeft:"8%", 
                    paddingRight:"8%", 
                    paddingTop:25, 
                    paddingBottom:25,
                   }}>
        
        <Container>
          <Paper>
            <CardContent>
              <div style={{padding:"2%"}}>
                <Typography component="h2" variant="h5">
                  {mdx.frontmatter.title}
                </Typography>
                <Typography component="h3" variant="subtitle1" color="textSecondary">
                  {new Date(mdx.frontmatter.date).toISOString().split("T")[0]}
                </Typography>
                <MDXProvider components={{
                    p: (props) => <Typography {...props} component="p" variant='body1'/>,
                    h1: (props) => <Typography {...props} component="h1" variant='h1'/>,
                    h2: (props) => <Typography {...props} component="h2" variant='h2'/>,
                    h3: (props) => <Typography {...props} component="h3" variant='h3'/>,
                    h4: (props) => <Typography {...props} component="h4" variant='h4'/>,
                    h5: (props) => <Typography {...props} component="h5" variant='h5'/>,
                    h6: (props) => <Typography {...props} component="h6" variant='h6'/>
                  }}>
                  <MDXRenderer>{mdx.body}</MDXRenderer>
                </MDXProvider>
              </div>
            </CardContent>
          </Paper>
        </Container>
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
