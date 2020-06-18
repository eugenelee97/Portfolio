import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import Grid from "@material-ui/core/Grid";
import AboutSkill from "./About_Skill";
import Chips from "./Skill_Tag";

const useStyles = makeStyles(theme => ({
  other: {
    color: pink[400],
    fontWeight: "bold"
  },
  about_main: {
    lineHeight: "20px",
    marginBottom: "30px"
  },
  bold: {
    lineHeight: "20px",
    marginBottom: "30px"
  }
}));

export default function AboutTxt() {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h3" component="h1">
        About <span className={classes.other}>Me</span>
      </Typography>
      <Typography
        className={(classes.about_main, classes.bold)}
        variant="h6"
        component="h2"
        gutterBottom
      >
        {"Hi, I'm Eugene Lee. I'm an Aspiring Software Engineer."}
      </Typography>

      <Typography className={classes.about_main} variant="body2" gutterBottom>
      Recently, I graduated with a First class in Networking Technologies which helped introduce me into the world of Computer Science. During my time studying, I have been exposed to Agile practices, Networking engineering as well as Web and Software Development. I am very passionate about learning and taking on new challenges therefore I have been spending my spare time learning React and Node and have attended many extracurricular programming activities.
      </Typography>
      <AboutSkill />
      <Chips />
    </Grid>
  );
}