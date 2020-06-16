import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AboutImg from "./About_Logo";
import AboutTxt from "./About_Main";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column"
  },
  main: {
    padding: theme.spacing(10),
    margin: "0 auto"
  },

  about: {
    textAlign: "left"
  }
}));

export default function AboutMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main}>
        <Grid container className={classes.about}>
          <AboutTxt />
          <AboutImg />
        </Grid>
      </Container>
    </div>
  );
}
