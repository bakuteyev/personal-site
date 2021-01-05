import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import MainFeaturedPost from './MainFeaturedPost';
import PersonalCard from './PersonalCard';
import ResumeExperienceContent from './ResumeExperienceContent';
import ResumeEducationContent from './ResumeEducationContent';
import ResumePost from './ResumePost';
import Grid from '@material-ui/core/Grid';
import PersonalInfoTable from './PersonalInfoTable.js'
import Box from '@material-ui/core/Box';

import Skills from './Skills';


const showPosts = (posts) =>  (
  <div>
      {posts.map(({ node: post }) => (
        <Grid item >
          <div key={post.id} style={{ padding: 10, width:"100%"}}>
              <ResumePost post={post}/>
          </div>
        </Grid>
      ))}
  </div>
);




export default function ResumeTab() {
   
    const mainFeaturedPost = {
      title: 'Anton Bakuteev',
      description: "Data Scientist",
      image: '/images/I.jpg',
      imgText: 'Anton Bakuteev',
    };
    
    return (
            <Box mx={"auto"}>
                <Grid container item spacing={3} >
                  <Grid item sm={0} lg={1} xl={1} md={1} xs={0}>
                  </Grid>

                  <Grid item sm={5} lg={3} xl={3} md={3} xs={12}>
                    <Grid container item spacing={2} >
                      <Grid item xs={12}>
                        <PersonalCard  />
                      </Grid>
                      <Grid item xs={12}>
                        <PersonalInfoTable  />
                      </Grid>
                    </Grid>
                  </Grid>
                  
                  <Grid item sm={6} lg={7} xl={7} md={7 } xs={12}>
                    <Grid container item spacing={2}  >
                      <div style={{ padding: 10,  width:"100%"}}>
                        <Grid item >
                          <Typography variant="h6" align='center'> Experience </Typography>
                          <ResumeExperienceContent showFunc={showPosts}/>
                        </Grid>
                        <Grid item >
                          <Typography variant="h6" align='center'> Education </Typography>
                          <ResumeEducationContent showFunc={showPosts}/>
                        </Grid>
                        <Grid item >
                          <Typography variant="h6" align='center'> Skills </Typography>
                          <Skills/>
                        </Grid>
                      </div>
                    </Grid>
                  </Grid>

                  <Grid item sm={0} lg={1} xl={1} md={1} xs={0}>
                  </Grid> 
                </Grid>
            </Box>
    );
  }
  