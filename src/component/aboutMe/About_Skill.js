import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import Chips from "./Skill_Tag";

const useStyles = makeStyles(theme => ({
  skill_h: {
    marginTop: "20px",
    fontWeight: "bold",
    fontSize: "18px"
  },
  skill: {
    color: pink[400],
    fontWeight: "bold"
  }
}));

export default function AboutSkill() {
  const classes = useStyles();

  return (
    <Typography className={classes.skill_h} variant="h6" component="h4">
      What Skill I Have
    </Typography>
  );
}
