import 'bootstrap/dist/css/bootstrap.min.css';
import "./components/navbar.css";
import 'aos/dist/aos.css';
import {RangeInput, Box} from 'grommet';
import SectionLinks from './components/SectionLinks';
import Milestones from './components/Home';
import {useState} from 'react';
import AOS from 'aos';
import {Route, Switch} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from "./components/projects";
import Skills from "./components/skills";
import {BrowserRouter} from "react-router-dom";

function App () {
  const [value, setValue] = useState(10);
  return <div className="app p-0 m-0">
    <BrowserRouter>
      <Switch>
        <Route exact path="/portfolio">
          <Navbar page={"portfolio"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Home />
        </Route>
        <Route path="/portfolio/projects">
          <Navbar page={"projects"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Projects />
        </Route>
        <Route path="/portfolio/about">
          <Navbar page={"about"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Skills />
        </Route>
      </Switch>
    </BrowserRouter>
  </div >;
};
// <div data-aos="flip-down" data-aos-duration="1000" className="App">
AOS.init();
export default App;
/*

      <Box
        className="navbar"
        direction="column"
        height="720px"
        width="medium"
        basis="xlarge"
        pad="medium"
        background="#4a148c"
        position="sticky"
      >

        {/* ============================================================================== /* <RangeInput
          className="navigation-range"
          value={value}
        // onChange={}
        /> */

{/* =============================================================================== */}
/*
<SectionLinks />

      </Box >*/