import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://www.linkedin.com/in/iameugenelee/" target="_blank">
        Eugene Lee
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200]
  },
  footer_text: {
    textAlign: "left",
    padding: theme.spacing(3,2)

  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container className={classes.footer_text} disableGutters={true}>
        <Typography variant="body1">
          {"This is Eugene Lee's Portfolio Website."}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}


export default Footer;