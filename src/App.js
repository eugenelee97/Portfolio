import React, { useRef } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { eugeneTheme } from "./component/theme/eugeneTheme";
import Nav from "./component/nav/nav";
import Footer from "./component/footer/footer";
import MainAbm from "./component/aboutme/main";
import ProjectCarousel from "./component/project/carousel";
import { projectData } from "../src/component/data/projectData";


const App = () => {
  const abtRef = useRef();
  const pjRef = useRef();

  return (
    <ThemeProvider theme={eugeneTheme}>
      <Nav abtRef={abtRef} pjRef={pjRef} />
      <MainAbm ref={abtRef} />
      <ProjectCarousel list={projectData} ref={pjRef} />
      <Footer />
    </ThemeProvider>
  );

}

export default App;
