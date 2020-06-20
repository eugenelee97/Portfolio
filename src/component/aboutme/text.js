import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import Grid from "@material-ui/core/Grid";
import SkillAbm from "./skill";
import SkillTagsAbm from "./skillTags";

const useStyles = makeStyles(theme => ({
  text_lastL: {
    color: pink[400],
    fontWeight: "bold"
  },

  text_bold: {
    lineHeight: "20px",
    marginBottom: "30px"
  }
}));

const TextAbm = () => {
  const classes = useStyles();

  return (
    <Grid item sm={12} md={6}>
      <Typography variant="h3" component="h1">
        About <span className={classes.text_lastL}>Me</span>
      </Typography>
      <Typography
        className={(classes.text_bold)}
        variant="h6"
        component="h2"
        gutterBottom
      >
        {"Hi, I'm Eugene Lee. I'm an Aspiring Software Engineer."}
      </Typography>

      <Typography className={classes.text_bold} variant="body1" gutterBottom>
        Recently, I graduated with a First class in Networking Technologies which helped introduce me into the world of Computer Science. During my time studying, I have been exposed to Agile practices, Networking engineering as well as Web and Software Development. I am very passionate about learning and taking on new challenges therefore I have been spending my spare time learning React and Node and have attended many extracurricular programming activities.
      </Typography>
      <SkillAbm />
      <SkillTagsAbm />
    </Grid>
  );
}


export default TextAbm;