import {Box} from "grommet";
import "./sectionlinks.css"

export default function SectionLinks () {
     return (
          <Box className="section-link-outer" direction="column">
               <div className="section-link">
                    <a href="#Aboutme">Abount me</a>
               </div>
               <div className="section-link">
                    <a href="#projects">Projects</a>
               </div>
               <div className="section-link">
                    <a href="#programming">programming</a>
               </div>
               <div className="section-link">
                    <a href="#skills">skills</a>
               </div>
               <div className="section-link">
                    <a href="#contactme">contact me</a>
               </div>
          </Box>
     )
}