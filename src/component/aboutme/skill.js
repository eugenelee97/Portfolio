import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
  skill_h: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px"
  }
}));

const SkillAbm = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.skill_h} variant="h6" component="h4">
      What Skill I Have
    </Typography>
  );
}

export default SkillAbm;