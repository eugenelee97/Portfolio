import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    background: "transparent",
    boxShadow: "none",
    padding: theme.spacing(2, 8)
  },
  other: {
    color: pink[400],
    fontweight: "bold"
  },
  title: {
    flexGrow: 1,
    color: "black",
    fontWeight: "bold"
  }
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Eugeni<span className={classes.other}>e</span>
          </Typography>

          <Button color="black">About Me</Button>
          <Button color="black">Project</Button>
          <Button color="black">CV</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
