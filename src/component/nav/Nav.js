import React from "react";
import { useStyles } from "./style";
import { AppBar, Toolbar, Typography, Button, Link, Container } from "@material-ui/core";




const Nav = ({ abtRef, pjRef }) => {
  const classes = useStyles();

  const handleScroll = ref => {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop
    })
  }

  return (
    <div className={classes.nav_block}>
      <AppBar position="fixed" className={classes.nav_bar}>
        <Container disableGutters={true}>
          <Toolbar>
            <Typography variant="h6" className={classes.nav_logo}>
              Eugeni<span className={classes.nav_lastL}>e</span>
            </Typography>

            <Button onClick={() => handleScroll(abtRef)}>About Me</Button>
            <Button onClick={() => handleScroll(pjRef)}>Project</Button>
            <Link color="inherit" href="./EugeneResume.pdf" target="_blank">
              <Button >Download CV</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}


export default Nav;