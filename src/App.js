import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";

import { eugeneTheme } from "./component/theme/theme_edit";
import "./App.css";
import Nav from "./component/nav/Nav";
import StickyFooter from "./component/footer/StickyFooter";
import AboutMe from "./component/aboutMe/AboutMe";
import Projects from "./component/project/Project";
import { projectData } from "../src/component/dummy/project_Data";
class App extends Component {
  state = projectData;

  render() {
    return (
      <ThemeProvider theme={eugeneTheme}>
        <Nav />
        <AboutMe />
        <Projects list={this.state} />
        <StickyFooter />
      </ThemeProvider>
    );
  }
}

export default App;
