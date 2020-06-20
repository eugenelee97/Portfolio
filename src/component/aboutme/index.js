import React, { forwardRef } from "react";
import { CssBaseline, Container, Grid } from "@material-ui/core";
import ImageAbm from "./image";
import TextAbm from "./text";
import { useStyles } from "./style";


const MainAbm = forwardRef((props, ref) => {
  const classes = useStyles();

  return (
    <div ref={ref} className={classes.main_block}>
      <Container component="main" >
        <CssBaseline />
        <Grid container className={classes.main_text}>
          <TextAbm />
          <ImageAbm />
        </Grid>
      </Container>
    </div>
  );
});

export default MainAbm;