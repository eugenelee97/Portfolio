import React, { useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { eugeneTheme } from "./component/theme/theme_edit";
import Nav from "./component/nav/Nav";
import StickyFooter from "./component/footer/StickyFooter";
import AboutMe from "./component/aboutMe/AboutMe";
import Projects from "./component/project/Project";
import { projectData } from "../src/component/dummy/project_Data";

const App = () => {
  const abtRef = useRef();
  const pjRef = useRef();

  return (
    <ThemeProvider theme={eugeneTheme}>
      <Nav abtRef={abtRef} pjRef={pjRef}/>
      <AboutMe ref={abtRef}/>
      <Projects list={projectData} ref={pjRef} />
      <StickyFooter />
    </ThemeProvider>
  );
  
}

export default App;
