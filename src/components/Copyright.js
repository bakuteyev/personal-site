
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby';
import React from "react";

export default function Copyright() {
    return (
        <Box m={3} pt={4}>

        <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://sometech.website.yandexcloud.net/">
                SomeTech™
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
      
    );
  }