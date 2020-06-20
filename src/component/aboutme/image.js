import React from "react";
import { useStyles } from "./style";
import { Grid } from "@material-ui/core";


const ImageAbm = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.img_block} item sm={12} md={6}>
      <img className={classes.img} src="./Eugene.png" alt="" />
    </Grid>
  );
}

export default ImageAbm;