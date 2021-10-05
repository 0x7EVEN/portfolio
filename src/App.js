import logo from './logo.svg';
import Navbar from './components/Navbar';
import {RangeInput, Box} from 'grommet';
import "./components/navbar.css";
import {useState} from 'react';
import SectionLinks from './components/SectionLinks';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Home from './components/Home';
import Milestones from './components/Home';



function App () {
  const [value, setValue] = useState(10);
  return (
    <div className="App">
      <Navbar />
      {/* <Milestones /> */}
    </div>
  );
};

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