import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  img_block: {
    textAlign: "center"
  },
  img: {
    width: "100%",
    maxWidth: "540px", 
  }
}));

const ImageAbm = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.img_block} item sm={12} md={6}>
      <img className={classes.img} src="./Eugene.png" alt="" />
    </Grid>
  );
}

export default ImageAbm;