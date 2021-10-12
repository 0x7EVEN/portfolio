import "./home.css"
import "./navbar.css"
import "./projects.css"
import "./sectionlinks.css"
import "./timeline.css"
import "./Milestone.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from 'react-bootstrap'
import {useEffect} from "react";
import {Link} from "react-router-dom"
import Journey from "./timeline";
import axios from "axios";

export default function Navbar ({page}) {
     const theme = true;
     async function visiters () {
          const {data} = await axios.get("https://visitor-badge.glitch.me/badge?page_id=0x7EVEN");
          console.log(data);
     }
     useEffect(() => {
          visiters()
     },[])

     return (
          <div className={`${theme ? "light" : "dark"} w-100 p-0 m-0`} >
          <Col className="p-0 side-nav d-none col-none d-sm-none d-md-block col-md-2 col-lg-2">
               {/* <Row className="my-pic p-0 m-0">
                    <img className="p-0" src="https://avatars.githubusercontent.com/u/76391543?v=4" alt="" />
               </Row> */}
               {/* <Row className="text-center social-links">
                    <Col className="col-2"><img src="https://cdn0.iconfinder.com/data/icons/work-2-2/200/Job-Application-1-256.png" alt="" /></Col>
                    <Col className="col-2">
                         <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-128.png" alt="" />
                    </Col>
                    <Col className="col-2">
                         <img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png" alt="" />
                    </Col>
                    <Col className="col-2"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-128.png" alt="" /></Col>
                    <Col className="col-2"><img src="https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-128.png" alt="" /></Col>
                    <Col className="col-2"><img src="https://cdn3.iconfinder.com/data/icons/social-media-networks-logos-and-badges-1/64/Social__Mail--circle-128.png" alt="" /></Col>
               </Row> */}
               <Row className="m-0">
                    {/* <Col className="col-12 pt-4">home</Col>
                    <Col className="col-12 pt-4">projects</Col>
                    <Col className="col-12 pt-4">about</Col>
                    <Col className="col-12 pt-4">contact</Col> */}
                         <Col className="pt-4 m-0">
                         <Journey className="m-0"  page={page}></Journey>
                         </Col>
                    </Row>
               <Row className="m-0 p-3">
                         <Col className="col-12 d-flex justify-content-center icon-custom-heading">
                         Connect me Over
                         </Col>
               </Row>
               <Row className="m-0 p-2">
                         <Col className="col-12 d-flex justify-content-center">
                              <i class='fab fa-github icon-custom'></i>
                         </Col>
               </Row>
               <Row className="m-0 p-2">
                         <Col className="col-12 d-flex justify-content-center">
                              <i class='fab fa-linkedin icon-custom'></i>
                         </Col>
               </Row>
               <Row className="m-0 p-2">
                         <Col className="col-12 d-flex justify-content-center">
                              <i class='fas fa-envelope-open icon-custom-2'></i>
                         </Col>
               </Row>
               <Row className="m-0 p-3">
                         <Col className="col-12 d-flex justify-content-center">
                              <i class='fab fa-discord icon-custom'></i>
                         </Col>
               </Row>
               <Row className="link-to m-0">
                         {/* <i class='far fa-address-card'></i> */}
                         <button>Resume</button>
               </Row>
               {/* <Row className="m-0 lowest">
                    <Col className="d-flex justify-content-center visiters" style={{display: page == "portfolio" ? "flex":"none"}}>
                         <img style={{display: page == "portfolio" ? "flex":"none"}} align="center" src="https://visitor-badge.glitch.me/badge?page_id=0x7EVEN" />
                    </Col>
               </Row> */}
          </Col>
          <Container fluid  className="border navbar-custom d-block d-sm-block sticky d-md-none d-lg-none p-0 m-0">
               <Row className="text-center p-0 m-auto align-middle">
                    <Col className="border py-2 col-4 me-auto" >
                         <div className="border p-0 m-0" >
                              <Link to="/">
                                   <div className="div-inline">home</div>
                              </Link>
                         </div>
                    </Col>
                    <Col className="border col-2" >
                         <div className="div-inline">
                              <Link to="/projects">
                         projects
                              </Link>
                         </div>
                    </Col>
                    <Col className="border col-2" >
                         <div className="div-inline">
                              <Link to="/">
                                   blogs
                              </Link>
                              </div>
                    </Col>
                    <Col className="border col-2" >
                         <div className="div-inline">
                              <Link to="/about">
                                   about
                              </Link>
                         </div>
                    </Col>
                    <Col className="border col-2" >
                              <div className="div-inline">
                              contact
                         </div>
                    </Col>
               </Row>
               </Container>
          </div>
     )
}

/*
          <div className="navbar-custom">
               {/* <h1>{theme ? "Black" : "White"}</h1> */
               /* <Container className="navbar-custom d-none d-md-block" fluid >
                    <Row xl={12} >
                         <Col className="navbar-custom" xs="12" >
                              <Row className="" >
                                   <Col xs={10} md={10}  className="image-holder m-4 mt-5"  >
                                   <Image  roundedCircle  src="https://avatars.githubusercontent.com/u/76391543?s=400&u=52388748cb5f1f2df53a61b5b72bb04776c05a64&v=4" ></Image>
                                   </Col  >
                                   <Col className="border text-center">
                                   </Col>
                                   <Row className="mx-5" >
                                   <Col xs={8} className="text-center my-4 p-2" >
                                        <a href="">
                                             <h3>About me</h3>
                                        </a>
                                   </Col>

                                   <Col xs={8} className="text-center my-4 p-2" >
                                        <a href="">
                                             <h3>Projects</h3>
                                        </a>
                                   </Col>

                                   <Col xs={8} className="text-center my-4 p-2" >
                                        <a href="">
                                             <h3>Skills</h3>
                                        </a>
                                   </Col>

                                   <Col xs={8} className="text-center my-4 p-2" >
                                        <a href="">
                                             <h3>Contact info</h3>
                                        </a>
                                   </Col>
                                   </Row>
                              </Row>
                         </Col>
                    </Row>
               </Container> }

          </div>
     )
*/