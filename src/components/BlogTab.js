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
    <Box mx={"auto"}>
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
