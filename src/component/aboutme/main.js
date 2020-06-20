import React, { forwardRef } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ImageAbm from "./image";
import TextAbm from "./text";

const useStyles = makeStyles(theme => ({
  main_block: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(20, 0, 16, 0),
  },
  main_text : {
    textAlign: "left",
  }
}));

const MainAbm = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.main_block}>
      <CssBaseline />
      <Container component="main">
        <Grid container className={classes.main_text}>
          <TextAbm />
          <ImageAbm />
        </Grid>
      </Container>
    </div>
  );
});

export default MainAbm;