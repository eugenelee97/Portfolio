import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  tag: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    marginTop: "10px",
    "& > *": {
      margin: theme.spacing(0.6)
    }
  }
}));

export default function Chips() {
  const classes = useStyles();

  const skills = [
    "HTML/CSS",
    "PHP",
    "JavaScript",
    "Java",
    "ReactJS",
    "Python",
    "C",
    "Assembly",
    "CCNA certificated",
    "Software Defined Network",
    "AWS",
    "Ardunio",
    "Zigbee",
    "RFID",
    "Wireless AP/Router"
  ];

  return (
    <div className={classes.tag}>
      {skills.map(skill => {
        return <Chip label={skill} />;
      })}
    </div>
  );
}
