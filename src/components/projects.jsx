import {Col,Row,Container,Carousel} from "react-bootstrap"
import "./home.css"
import "./navbar.css"
import "./projects.css"
import "./sectionlinks.css"
import "./timeline.css"
import "./Milestone.css";
import AOS from "aos"


export default function Projects () {
     return <div className="most-outer-div p-0 m-0">
          <Container>
               <Row>
               <Col className="col-12 p-0 m-0 col-md-10 col-sm-12">
               <Container className="m-0 p-3">

               <Row className="p-0">
                    <Col className="col-12 p-0">
                    <Carousel fluid className="p-0 heights-carosel">
                    <Carousel.Item>
                    <img
                         className="d-block w-100  p-0 m-0"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28092021_2x.jpg"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         {/* <h3>First slide label</h3> */}
                         {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB03_Web_28092021_2x.jpg"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         {/* <h3>Second slide label</h3> */}
                         {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="https://ii2.pepperfry.com/media/wysiwyg/banners/HB02_Web_28092021_2x.jpg"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         {/* <h3>Third slide label</h3> */}
                         {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                    </Carousel.Item>
                         </Carousel>
                    </Col>

          {/* <Container className="prj-outer">
               <Row>
                    <Col></Col>
               <Carousel>
                    <Carousel.Item>
                    <img fluid
                         className="d-block w-100"
                         src="https://via.placeholder.com/600x600"
                         alt="First slide"
                    />
                    <Carousel.Caption>
                         <h3>First slide label</h3>
                         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="holder.js/800x400?text=Second slide&bg=282c34"
                         alt="Second slide"
                    />

                    <Carousel.Caption>
                         <h3>Second slide label</h3>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                         className="d-block w-100"
                         src="holder.js/800x400?text=Third slide&bg=20232a"
                         alt="Third slide"
                    />

                    <Carousel.Caption>
                         <h3>Third slide label</h3>
                         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>
               </Row>
          </Container> */}
          </Row>
          </Container>
          <Container data-aos="fade-up" data-aos-duration="1000" className="my-5 p-5 color-code-1">
               <Row className="mpl">
                    <Col className="col-12">
                         <h1 className="project-title">
                              MPL.Live
                         </h1>
                    </Col>
                    <Col className="col-12">
                         <div className="m-1">
                              <p className="p-1">
                                   {"  "}  A web application for information about MPL- Gaming app and features, Events and Prizes. Along with Products like -  Sports T-shirts and team India jerseys.
                              </p>
                         </div>
                        </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">✨ Features :</h3>
                         <p className="px-3">
                              <ul>
                              <li>Social Sign-in/ Signup</li>
                              <li>Product gallery with add to cart feature</li>
                              <li>user authentication</li>
                              <li>Dynamic Product Loading with details</li>
                              <li>Changing cart count</li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">👩🏻‍💻 Tech Stack :</h3>
                         <p className="px-3">
                              <ul>
                              <li>HTML - Ejs</li>
                              <li>CSS</li>
                              <li>JavaScript</li>
                              <li>MongoDB - Mongoose</li>
                              <li>NodeJS </li>
                              <li>ExpressJS</li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                      <h3 className="mt-3">🎯 Responsibilities :</h3>
                         <p className="px-3">
                              <ul>
                              <li>Laid out the database schema.</li>
                              <li>built the REST API.</li>
                              <li>Developed the E-sports, Team-India-products and Product-details page.</li>
                              <li>Implemented add to cart functionality both at Frontend and Backend.</li>
                              <li>Built authentication.</li>
                              <li>Developed navigation and footers of all pages.</li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">😇 Members and Duration :</h3>
                         <p className="px-3">
                              A collaborative project built by a team of 2 executed in 10 days.
                              <ul>
                              <li>Sonam Kumari</li>
                              <li>Arif Shaikh</li>
                              </ul>
                              </p>
                         </div>
                    </Col>
               </Row>
          </Container>
          <hr/>
          <Container  data-aos="fade-up" data-aos-duration="1000" fluid className="my-5 p-5 color-code-2">
               <Row className="pepperfry">
                    <Col className="col-12">
                         <h1 className="project-title pepperfry-heading">
                              pepperfry.com
                         </h1>
                    </Col>
                    <Col className="col-12">
                         <div className="m-1">
                         <p className="p-1">
                         {"  "} Indian online marketplace for furniture and home decoration, providing users to signup, buy and track the purchased product.
                         </p>
                         </div>
                        </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">✨ Features :</h3>
                              <p className="px-3">
                                   <ul>
                                   <li>Social Sign-in/ Signup.</li>
                                   <li>add,remove from cart feature.</li>
                                   <li>user authentication</li>
                                   <li>search the product (API)</li>
                                   <li>filter and sort the products.</li>
                                   </ul>
                              </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">👩🏻‍💻 Tech Stack :</h3>
                              <p className="px-3">
                              Tech Stack :
                              <ul>
                              <li>Frameworks/Libraries - React, BootStrap, ReactStrap</li>
                              <li>Languages - JavaScript, CSS</li>
                              <li>Misc - RegEx</li>
                              <li>Backend - MongoDB</li>
                              <li>Backend frameworks - NodeJS,ExpressJS </li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                      <h3 className="mt-3">🎯 Responsibilities :</h3>
                         <p className="px-3">
                              <ul>
                              <li>Laid out the database schema.</li>
                              <li>built the REST API.</li>
                              <li>Developed the E-sports, Team-India-products and Product-details page.</li>
                              <li>Implemented add to cart functionality both at Frontend and Backend.</li>
                              <li>Built authentication.</li>
                              <li>Developed navigation and footers of all pages.</li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">😇 Members and Duration :</h3>
                         <p className="px-3">
                              A collaborative project built by a team of 2 executed in 10 days.
                              <ul>
                              <li>Himanshu Bhisht</li>
                              <li>Arif Shaikh</li>
                              <li>Mohammad Muddasir</li>
                              <li>Sandeep Nilaji</li>
                              </ul>
                              </p>
                         </div>
                    </Col>
               </Row>
          </Container>
          <hr/>
          <Container  data-aos="fade-up" data-aos-duration="500" fluid className="my-5 p-5 color-code-3">
               <Row className="pepperfry">
                    <Col className="col-12">
                         <h1 className="project-title">
                              pepperfry.com
                         </h1>
                    </Col>
                    <Col className="col-12">
                         <div className="m-1">
                         <p className="p-1">
                         {"  "} Indian online marketplace for furniture and home decoration, providing users to signup, buy and track the purchased product.
                         </p>
                         </div>
                        </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">✨ Features :</h3>
                              <p className="px-3">
                                   <ul>
                                   <li>Social Sign-in/ Signup.</li>
                                   <li>add,remove from cart feature.</li>
                                   <li>user authentication</li>
                                   <li>search the product (API)</li>
                                   <li>filter and sort the products.</li>
                                   </ul>
                              </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">👩🏻‍💻 Tech Stack :</h3>
                              <p className="px-3">
                              <ul>
                              <li>Frameworks/Libraries - React, BootStrap, ReactStrap</li>
                              <li>Languages - JavaScript, CSS</li>
                              <li>Misc - RegEx</li>
                              <li>Backend - MongoDB</li>
                              <li>Backend frameworks - NodeJS,ExpressJS </li>
                              </ul>
                         </p>
                       </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                      <h3 className="mt-3">🎯 Responsibilities :</h3>
                         <p className="px-3">
                              <ul>
                              <li>Laid out the database schema.</li>
                              <li>built the REST API.</li>
                              <li>Developed the E-sports, Team-India-products and Product-details page.</li>
                              <li>Implemented add to cart functionality both at Frontend and Backend.</li>
                              <li>Built authentication.</li>
                              <li>Developed navigation and footers of all pages.</li>
                              </ul>
                         </p>
                         </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                         <div className="m-1">
                         <h3 className="mt-3">😇 Members and Duration :</h3>
                         <p className="px-3">
                              A collaborative project built by a team of 2 executed in 10 days.
                              <ul>
                              <li>Sonam Kumari</li>
                              <li>Arif Shaikh</li>
                              </ul>
                              </p>
                         </div>
                    </Col>
               </Row>
          </Container>
          <Container>
          <Row className="d-inline">
          </Row>
          </Container></Col>
          <Col className="col-2 p-0 m-0 d-md-none d-sm-none"></Col></Row>
          </Container>
     </div>
}
AOS.init()