import React from "react";
import { useStyles } from "./style";
import { Chip } from "@material-ui/core";


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