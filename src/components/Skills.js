import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function Skills() {
  const classes = useStyles();

  const skills = [
    "Data Analysis",
    "Data Science",
    "Product Analytics",
    "A/B Testing",
    "Scoring Models",
    "Antifraud",
    "Signal Processing",
    "Python",
    "Pandas",
    "Numpy",
    "Scikit-Learn",
    "SciPy",
    "Numba",
    "Deep Learning",
    "TensorFlow",
    "Keras",
    "Julia",
    "Modeling hysical Processes",
    "Agent Based Modeling",
    "Machine Learning",
    "Operations Research",
    "Systems Analysis",
    "Statistics",
    "DataVisualization",
    "Bokeh",
    "Plotly",
    "BigData",
    "Docker",
    "Git",
    "Databases",
    "ClickHouse",
    "MySQL",
    "PostGIS",
    "PostgreSQL",
    "Amazon Athena",
    "Oracle Database",
    "Back-End Web Development",
    "React",
  ];

  return (
    <div className={classes.root}>
      {skills.map((skill) => (
        <Chip label={skill} key={skill} />
      ))}
    </div>
  );
}
