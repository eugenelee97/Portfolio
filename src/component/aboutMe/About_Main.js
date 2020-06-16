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
        {"Hi, I'm Eugene Lee. Lorem Ipsum is simplu dummy text of the."}
      </Typography>

      <Typography className={classes.about_main} variant="body2" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </Typography>
      <AboutSkill />
      <Chips />
    </Grid>
  );
}
