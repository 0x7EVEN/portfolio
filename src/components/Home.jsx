// {
//       title: "May 1940",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: "http://someurl/image.jpg"
//         }
//       }
//     }
//   import { Chrono } from "react-chrono";

//   const Home = () => {
//     const items = [{
//       title: "Started jailbreaking android phones",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//     },{
//       title: "May 1940",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: "http://someurl/image.jpg"
//         }
//       }
//     },{
//       title: "May 1940",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: "http://someurl/image.jpg"
//         }
//       }
//     },{
//       title: "May 1940",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: "http://someurl/image.jpg"
//         }
//       }
//     },{
//       title: "Got my first phone",
//       cardTitle: "Dunkirk",
//       cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
//       cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
//       media: {
//         type: "IMAGE",
//         source: {
//           url: "http://someurl/image.jpg"
//         }
//       }
//     }];

//     return (
//          <div style={{width: "80vw",margin:"auto" }}>
//               <Chrono theme={{
//                    primary: "#fff",
//                    secondary: "#15181A",
//                    cardBgColor: "#15161A",
//                    cardForeColor: "white",
//                    titleColor: "white"

//               }}
//                items={items} mode="VERTICAL_ALTERNATING"
//           />
//       </div>
//     )
// }



// import './Milestone.css'
// import React from 'react'
// import PropTypes from 'prop-types'

// import { Button } from 'primereact/button'
// import { Card } from 'primereact/card'
// import { Timeline } from 'primereact/timeline'

// function Milestones({ milestones }) {
//   const goToLinkHandle = (url) => {
//     window.open(url, '__blank')
//   }

//   const marker = (milestone) => (
//     <span
//       className="custom-marker p-shadow-2"
//       style={{ backgroundColor: milestone.color }}
//     >
//       <i className={`pi pi-${milestone.icon} p-p-2`}></i>
//     </span>
//   )

//   const content = (milestone) => (
//     <Card title={milestone.title} subTitle={milestone.date} className="p-m-5">
//       {milestone.image && (
//         <img
//           src={milestone.image}
//           onError={(e) =>
//             (e.target.src =
//               'https://github.com/EddieHubCommunity.png')
//           }
//           alt={milestone.title}
//           width={100}
//           className="p-shadow-2"
//         />
//       )}
//       <p>{milestone.description}</p>
//       <div className="p-d-flex p-jc-end">
//         <Button
//           label="Learn more"
//           icon="pi pi-check"
//           className="p-button-raised p-button-rounded"
//           onClick={() => goToLinkHandle(milestone.url)}
//         />
//       </div>
//     </Card>
//   )

//   return (
//     <section className="p-d-flex p-jc-center p-mb-5">
//       <div style={{ width: 70 + '%' }}>
//         <Timeline
//           value={milestones}
//           align="alternate"
//           className="customized-timeline"
//           marker={(milestone) => marker(milestone)}
//           content={(milestone) => content(milestone)}
//         />
//       </div>
//     </section>
//   )
// }

// Milestones.propTypes = {
//   milestones: PropTypes.array.isRequired,
// }

// export default Milestones
// // export default Home;


// import 'primeicons/primeicons.css';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/primereact.css';
// // import 'primeflex/primeflex.css';
// // import '../../index.css';
// import ReactDOM from 'react-dom';

// import React, { useRef } from 'react';
// import { Timeline } from 'primereact/timeline';
// import { Card } from 'primereact/card';
// import { Button } from 'primereact/button';
// import './TimelineDemo.css';


// const events = [
//     { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
//     { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
//     { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
//     { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
// ];
//     const customizedMarker = (item) => {
//         return (
//             <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
//                 <i className={item.icon}></i>
//             </span>
//         );
//     };

//     const customizedContent = (item) => {
//         return (
//             <Card title={item.status} subTitle={item.date}>
//                 { item.image && <img src={`showcase/demo/images/product/${item.image}`} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
//                     quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
//                 <Button label="Read more" className="p-button-text"></Button>
//             </Card>
//         );
//     };
// function Milestone () {
//      return <div className="card">
//           <h5>Customized</h5>
//           <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
//      </div>;
// }

// export default Milestone;

import {Col, Row, Container} from "react-bootstrap"
import {ReactComponent as Hero} from "./jamron.svg"
import 'antd/dist/antd.css';
import { Card } from 'antd';
import AOS from "aos"
import "./home.css"
import "./navbar.css"
import "./projects.css"
import "./sectionlinks.css"
import "./timeline.css"
import "./Milestone.css"
export default function Home(){
     const { Meta } = Card;
     return <div className="container-fluid p-0">
     <Col className="order-1 col-12 col-sm-12 col-md-10 col-lg-10 p-0 m-0">
     <Container data-aos="fade-up" data-aos-duration="1000"  fluid className="border p-0 py-5 m-auto">
          <Row className="heading-row m-auto p-0">
               <Col className="col-12 col-lg-7 col-md-7 col-sm-12 text-left hero-name align-end p-2 order-sm-2 order-md-2 order-lg-1 order-2">
                    <div className="p-5">
                         <h2>Hi 👋 there !, it's me </h2>
                         <h1 className="m-0 p-0 extra-large-font">{"< Arif Shaikh />"}</h1>
                         <h4 className="sub-heading">//💻 M.E.R.N. stack Developer,  🚩 C.T.F. player</h4>
                    </div>
               </Col>
               <Col className="col-12 col-lg-5 col-md-5 col-sm-12 order-md-1 order-sm-1 p-0 m-0">
               <div className="floating-pic fluid">
               <Hero fluid/>
               </div>
               </Col>
          </Row>
               </Container>
          <Container data-aos="fade-up" data-aos-duration="1000" className="border my-3 py-5">
               <Row className="second">
               <h2>Projects</h2>
               <Col className="col-12 col-md-6 col-lg-3 my-2">
               <Card className="m-auto"
               hoverable
               style={{ width: 240,height:380 }}
               cover={<img className="card-img"  alt="example" src="https://www.itechscripts.com/images/product_logos/product_large/pepperfry-clone.png" />}
               >
               <Meta title="Pepperfry Clone"  />
               </Card>
               </Col>
               <Col className="col-12 col-md-6 col-lg-3 my-2">
               <Card className="m-auto"
               hoverable
               style={{ width: 240,height:380 }}
               cover={<img className="card-img"  alt="example" src="https://www.mpl.live/cledge.mpl.live/pb/website/static/445f6dc51d2b4fdb9b67a355ba67afc2.webp" />}
               >
               <Meta style={{fontSize:"13px"}}  title="MPL.live clone" />
               </Card>
               </Col>
               <Col className="col-12 col-md-6 col-lg-3 my-2">
               <Card className="m-auto"
               hoverable
               style={{ width: 240,height:380 }}
               cover={<img alt="example"  className="card-img" src="https://allesl.com/wp-content/uploads/2018/03/Blank-Tic-Tac-Toe-Sheet.png" />}
               >
               <Meta title="Tik Tak Toe" />
               </Card>
               </Col>
               <Col className="col-12 col-md-6 col-lg-3 my-2">
               <Card className="m-auto"
               hoverable
               style={{ width: 240,height:380 }}
               cover={<img alt="example"  className="card-img"  src="https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_FMjpg_UX1000_.jpg" />}
               >
               <Meta title="Star Wars API" />
               </Card>
               </Col>
          </Row>
               </Container>
          <Container  className="border my-3 py-5">
                    <Row>
                         <Col className="d-flex justify-content-center"><h1><code style={{color:"#2972d4"}}>Visits : 1007</code></h1>
</Col>
               </Row>
               </Container>
     </Col>
     </div>
}
AOS.init()

