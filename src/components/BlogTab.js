import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import BlogContent from "./BlogContent";
import FeaturedPost from "./FeaturedPost";

const showPosts = (posts) => (
  <div>
    {posts.map(({ node: post }) => (
      <Grid item key={post.frontmatter.slug} >
        <div style={{ padding: 10, width: "100%" }}>
          <FeaturedPost post={post} />
        </div>
      </Grid>
    ))}
  </div>
);

export default function BlogTab() {
  return (
    <Box m={1} pt={1}>
    <Box
      sx={{
        // bgcolor: 'background.paper',
        pt: 1,
        pb: 2,
      }}
    >
      <Container maxWidth="md">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          SomeTech™ Blog
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Some Tech ideas for products.
        </Typography>
      </Container>
    </Box>
      <Grid container item spacing={3}>
        <Grid item lg={1} xl={1} md={1} ></Grid>

        <Grid item sm={12} lg={10} xl={10} md={10} xs={12}>
          <Grid container item spacing={2}>
            <div style={{ padding: 10, width: "100%" }}>
              <Grid item>
                <BlogContent showFunc={showPosts} />
              </Grid>
            </div>
          </Grid>
        </Grid>

        <Grid item lg={1} xl={1} md={1} ></Grid>
      </Grid>
    </Box>
  );
}
