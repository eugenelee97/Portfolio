import React, { forwardRef } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AboutImg from "./About_Logo";
import AboutTxt from "./About_Main";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(20, 0, 16, 0),
  },
  main: {
    margin: "0 auto"
  },

  about: {
    textAlign: "left",
  
  }
}));

const AboutMe = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.root}>
      <CssBaseline />
      <Container component="main">
        <Grid container className={classes.about}>
          <AboutTxt />
          <AboutImg />
        </Grid>
      </Container>
    </div>
  );
});

export default AboutMe;