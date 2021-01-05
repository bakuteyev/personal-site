import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Skills() {
  const classes = useStyles();

  const skills = [
    'Data Analysis', 
    'Data Science', 
    'Product Analytics', 
    'A/B Testing', 
    'Scoring Models', 
    'Antifraud', 
    'Signal Processing', 
    'Python', 
    'Pandas', 
    'Numpy', 
    'Scikit-Learn', 
    'SciPy', 
    'Numba', 
    'Deep Learning', 
    'TensorFlow', 
    'Keras', 
    'Julia', 
    'Modeling hysical Processes', 
    'Agent Based Modeling', 
    'Machine Learning', 
    'Operations Research', 
    'Systems Analysis', 
    'Statistics', 
    'DataVisualization', 
    'Bokeh', 
    'Plotly', 
    'BigData', 
    'Docker', 
    'Git', 
    'Databases', 
    'ClickHouse', 
    'MySQL', 
    'PostGIS', 
    'PostgreSQL', 
    'Amazon Athena', 
    'Oracle Database', 
    'Back-End Web Development', 
    'React'
  ]

  return (
    <div className={classes.root}>
      {skills.map((skill) => (<Chip label={skill} />))}
    </div>
  );
}
