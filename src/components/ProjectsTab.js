import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsContent from "./ProjectsContent";

const showProjects = (projects) => (
  <Grid container spacing={4}>
    {projects.map(({ node: project }) => (
      <Grid item xs={12} sm={6} md={3} key={project.frontmatter.slug} >
        <ProjectCard project={project} />
      </Grid>
    ))}
  </Grid>
);

export default function ProjectsTab() {
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
            SomeTech™ Products
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Completely free. No installation required. Always available.
          </Typography>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        <ProjectsContent showFunc={showProjects} />


      </Container>
    </Box>

  );
}
