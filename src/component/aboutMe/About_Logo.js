import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  imgBlock: {
  
    textAlign: "center"
  },
  img: {
   
    width: "100%",
    maxWidth: "540px",
 
    
  }
}));

export default function AboutImg() {
  const classes = useStyles();

  return (
    <Grid className={classes.imgBlock} item sm={12} md={6}>
      <img className={classes.img} src="./Eugene.png" alt="" />
    </Grid>
  );
}
