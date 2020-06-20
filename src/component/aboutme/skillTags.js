import React from "react";
import { Chip } from "@material-ui/core";
import { useStyles } from "./style";

const SkillTagsAbm = ({ skills }) => {
  const classes = useStyles();

  return (
    <div className={classes.tag}>
      {skills.map(skill => {
        return <Chip label={skill} />;
      })}
    </div>
  );
}

export default SkillTagsAbm;