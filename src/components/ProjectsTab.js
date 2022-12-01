import { Container, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsContent from "./ProjectsContent";

const showProjects = (projects) => (
  <Grid container spacing={4}>
    {projects.map(({ node: project }) => (
    <Grid item xs={12} sm={6} md={4} key={project.frontmatter.slug} >
      <ProjectCard project={project} />
    </Grid>
    ))}
   </Grid>
);

export default function ProjectsTab() {
  return (
    
    <Box m={2} pt={2}>
        <Box
          sx={{
            // bgcolor: 'background.paper',
            pt: 2,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            > */}
          </Container>
        </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
          <ProjectsContent showFunc={showProjects} />
        
      
      </Container>
    </Box>

  );
}
