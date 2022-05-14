// import React from "react";
// import ReactDOM from "react-dom";
// import "antd/dist/antd.css";
// import "./timeline.css"
// import { Timeline, Button } from "antd";
import {Link} from "react-router-dom";
// import {CaretRightFilled ,MinusCircleFilled } from '@ant-design/icons';
// export default function Journey({page}){
//     return (
//       <div className="px-4">
//         <Timeline>
//                <Timeline.Item className="my-4"   dot={page == "portfolio" ? <i class='fas fa-play' style={{fontSize:'16px',color:"white",marginLeft:"5px"}}></i>: <i className="fas fa-circle" style={{fontSize:'16px'}}></i> }>
//                         <Link to="/portfolio">Home</Link>
//                </Timeline.Item>
//                <Timeline.Item className="my-4"  dot={page == "projects" ? <i class='fas fa-play' style={{fontSize:'16px',color:"white",marginLeft:"5px"}}></i>: <i className="fas fa-circle" style={{fontSize:'16px'}}></i>}>
//                     <Link to="/projects">projects</Link>
//                    </Timeline.Item>
//                <Timeline.Item className="my-4" dot={page == "about" ?  <i class='fas fa-play' style={{fontSize:'16px',color:"white",marginLeft:"5px"}}></i>: <i className="fas fa-circle" style={{fontSize:'16px'}}></i> }>
//                     <Link to="/about">about</Link>
//                </Timeline.Item>
//                <Timeline.Item className="my-4"  dot={page == "contact" ? <i class='fas fa-play' style={{fontSize:'16px',color:"white",marginLeft:"5px"}}></i>: <i className="fas fa-circle" style={{fontSize:'16px'}}></i>}>
//                     <Link to="/contact">contact</Link>
//                </Timeline.Item>
//         </Timeline>
//       </div>
//     );
// }
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import "./home.css"
import "./navbar.css"
import "./projects.css"
import "./sectionlinks.css"
import "./timeline.css"
import "./Milestone.css"


export default function Journey({page}) {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={page === "portfolio" ? "primary":"grey"}  />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Link style={{fontSize:"18px"}}  to="/">home</Link></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={page === "projects" ? "primary":"grey"}/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent><Link style={{fontSize:"18px"}} to="/projects">projects</Link></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={page === "about" ? "primary":"grey"}/>
          <TimelineConnector  />
        </TimelineSeparator>
        <TimelineContent><Link style={{fontSize:"18px"}} to="/about#tech-stack">about</Link></TimelineContent>
      </TimelineItem>
          <TimelineItem>
          <TimelineSeparator>
          <TimelineDot  color={page === "contact" ? "primary":"grey"}/>
          </TimelineSeparator>
          <TimelineContent  style={{fontSize:"18px"}}><a style={{fontSize:"18px"}} href="tel:7057522644">connect</a></TimelineContent>
          </TimelineItem>
     </Timeline>
  );
}
