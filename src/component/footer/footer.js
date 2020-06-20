import React from "react";
import { Typography, Container } from "@material-ui/core";
import Copyright from "./copyright";
import { useStyles } from "./style";


const Footer = () => {
  const classes = useStyles();
  const linkedinUrl = "https://www.linkedin.com/in/iameugenelee/";
  const currentYear = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footer_text} disableGutters={true}>
        <Typography variant="body1">
          This is Eugene Lee's Portfolio Website.
        </Typography>
        <Copyright name='Eugene Lee' link={linkedinUrl} year={currentYear} />
      </Container>
    </footer>
  );
}


export default Footer;