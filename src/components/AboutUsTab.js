import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import PersonalCard from "./PersonalCard";
import PersonalSummary from "./PersonalSummary";


const showPosts = (personals) => (
  <div>
    {personals.map(({ node: summary }) => (
      <Grid item key={summary.frontmatter.slug} >
        <div style={{ padding: 10, width: "100%" }}>
          <PersonalCard summary={summary} />
        </div>
      </Grid>
    ))}
  </div>
);

export default function AboutUsTab() {
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
            SomeTech™
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Our goal is to create scalable and robust data-based solutions, to make our clients life better!
          </Typography>
        </Container>
      </Box>
      <Grid container item spacing={1}>
        <Grid item lg={1} xl={1} md={1} ></Grid>
        <Grid item  lg={10} xl={1} md={1} >
            <PersonalSummary showFunc={showPosts} />
        </Grid>

       
        <Grid item lg={1} xl={1} md={1} ></Grid>
      </Grid>
    </Box>
  );
}
