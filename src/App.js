import 'bootstrap/dist/css/bootstrap.min.css';
// import "./components/navbar.css";
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import {Route, Switch} from "react-router-dom";
// import Navbar from './components/navbar';
// import Home from './components/Home';
// import Projects from "./components/projects";
// import Skills from "./components/skills";
// import {BrowserRouter} from "react-router-dom";

import "./components/main.css"
import Main from './components/Main';

function App () {
  return <div className="app p-0 m-0">
    {/* <BrowserRouter> */}
      {/* <Switch> */}
        {/* <Route exact path="/">
          <Navbar page={"portfolio"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Home />
        </Route>
        <Route path="/projects">
          <Navbar page={"projects"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Projects />
        </Route>
        <Route path="/about">
          <Navbar page={"about"} className="p-0 m-0 d-block d-sm-block d-md-none d-lg-none d-xl-none d-xxl-none" />
          <Skills />
        </Route>
        <Route ><h1>404</h1></Route>
      </Switch> */}
      <Main/>
    {/* </BrowserRouter> */}
  </div >;
};
// <div data-aos="flip-down" data-aos-duration="1000" className="App">
// AOS.init();
export default App;