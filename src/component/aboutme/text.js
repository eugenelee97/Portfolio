import React from "react";
import { Typography, Grid } from "@material-ui/core";
import SkillTagsAbm from "./skillTags";
import skills from "./skillsData";
import { useStyles } from "./style";


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

      <Typography className={classes.skill_h} variant="h6" component="h4">
        What Skill I Have
      </Typography>
      <SkillTagsAbm skills={skills} />
    </Grid>
  );
}


export default TextAbm;