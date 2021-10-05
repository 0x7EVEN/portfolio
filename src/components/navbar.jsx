import "./navbar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Image } from 'react-bootstrap'
import {useContext} from "react";
import {Theme} from "../context/ThemeContext";
export default function Navbar () {

     const theme = useContext(Theme);
     return (
          <div className={`${theme ? "light" : "dark"}`} >
          <Container fluid  className="border d-none sticky d-md-block">
               <Row className="text-center navbar-custom py-2">
                    <Col className="border p-2" >
                        <div className="border p-0 m-0" > home</div>
                    </Col>
                    <Col className="border offset-sm-5" >
                         projects
                    </Col>
                    <Col className="border" >
                         blogs
                    </Col>
                    <Col className="border" >
                         contact
                    </Col>
                    <Col className="border" >
                         test
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