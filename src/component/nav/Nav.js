import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  bar: {
    background: "#fafafa",
    boxShadow: "none",
    padding: theme.spacing(1, 8),
    position: "fixed",
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


export default function Nav({abtRef, pjRef}) {
  const classes = useStyles();

  const handleScroll = ref => {
    window.scrollTo({
    behavior:"smooth",
    top: ref.current.offsetTop
  })
}

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Eugeni<span className={classes.other}>e</span>
          </Typography>

          <Button color="black" onClick={()=>handleScroll(abtRef)}>About Me</Button>
          <Button color="black" onClick={()=>handleScroll(pjRef)}>Project</Button>
          <Link color="inherit" href="./EugeneResume.pdf" target="_blank">
          <Button color="black">Download CV</Button>
      </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
