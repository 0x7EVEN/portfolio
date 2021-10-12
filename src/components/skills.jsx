import {Col,Row,Container} from "react-bootstrap"
import "./skills.css"
import styled from 'styled-components'
// import {JavaScript} from '@styled-icons/simple-icons/Javascript'
import {ReactComponent as SQL} from "./icons/SQL.svg"
import {ReactComponent as C} from "./icons/C.svg"
import {ReactComponent as Mongo} from "./icons/MONGO.svg"
import {ReactComponent as Redux} from "./icons/Redux.svg"
import {ReactComponent as Asm} from "./icons/Assembly.svg"
import {ReactComponent as BootStrap} from "./icons/Bootstrap.svg"
const Card = styled.div`
     width:120px;
     height:120px;
     background-color:${({color}) => color ? color : "white"};
     text-align:center;
     aling-content:center;
     padding:25px;
`


export default function Skills () {
     return <div className="container-fluid p-0 m-0">
               <Col className="order-1 col-12 col-sm-12 col-md-10 col-lg-10 p-0 m-0">
          <br />
               <br/>
          <Container className="px-4">

               <br/>
               <br/>
               <Row>
               <h1>💪Tech Stack and Skills : </h1>
               </Row>
               <Row className="px-0 px-sm-4 py-0 my-0">
                    {/* <Col>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                                   </div>
                         <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                         </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                         </div>
                    <div className="blob blob-2">
                         <p>Test</p>
                    </div>
                    <div className="blob">
                              <p>Test</p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    <div className="blob p-0 m-0">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                    </div>
                    </Col> */}
               </Row>
          <Row className="py-0 px-0 px-sm-4">
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><i className='fab fa-js icon-custom skills-icons p-0 m-0'></i></p>
                         <p className="m-0">JavaScript</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><i className='fab fa-html5 icon-custom skills-icons'></i></p>
                         <p className="m-0">HTML 5</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                         <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><C/></p>
                         <p className="m-0">C/C++</p>
                              </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><i className='fas fa-code-branch icon-custom skills-icons'></i></p>
                         <p className="m-0">Git</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><SQL/></p>
                         <p className="m-0">SQL</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"1%"}}><Mongo/></p>
                         <p className="m-0">MongoDB</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><i className='fab fa-python icon-custom skills-icons'></i></p>
                         <p className="m-0">Python</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><i className='fab fa-react icon-custom skills-icons'></i></p>
                         <p className="m-0">React</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><Redux/></p>
                         <p className="m-0">Redux</p>
                    </Card>
               </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><BootStrap/></p>
                         <p className="m-0">BootStrap</p>
                    </Card>
                              </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"2%"}}><Asm/></p>
                         <p className="m-0">Assembly</p>
                    </Card>
                              </Col>
               <Col className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <Card className="card-outer">
                         <p style={{marginTop:"1%"}}><i className='fab fa-ubuntu icon-custom skills-icons'></i></p>
                         <p className="m-0">Ubuntu</p>
                    </Card>
               </Col>
               </Row>
          </Container>
               <br/>
               <br/>
               <br/>
               <br/>
          <Container className="px-4">
               <Row>
                         <Col><h1>😎 Accomplishments : </h1></Col>

               </Row>
                    <Row className="px-5">
                         <Col>
                              <Row>
                              <h3> 1. Solved <span className="blue-text">200+ DSA</span> problems.</h3>
                              </Row>
                              <Row>

                             <h3>  2. Extensive <span className="blue-text">500+ hands-on</span> Coding experience.</h3>
                              </Row>
                              <Row>
                             <h3>  3. C.T.F. Player in <span className="blue-text">reversing and web</span> exploitations.</h3>
                              </Row>
                              <Row>
                             <h3>  4. <span className="blue-text">Top 3%</span> on tryhackme.com - infosec learning platform.</h3>
                              </Row>
                              <Row>
                             <h3>  5. <span className="blue-text">Top 10%</span> Chess (blitz) players at Lichess.</h3>
                              </Row>
                         </Col>
               </Row>
          </Container>
          </Col>
          <Container className="py-5"></Container>
     </div>
}



/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="395" height="305" viewBox="0 0 395 305" class="shadow">
  <line x1="195" y1="70" x2="50" y2="200" stroke-width="1" class="line"/>
  <line x1="195" y1="70" x2="195" y2="200" stroke-width="1" class="line"/>
  <line x1="195" y1="70" x2="340" y2="200" stroke-width="1" class="line"/>

  <ellipse cx="195" cy="70" rx="120" ry="70" class="ellipse"/>
  <text x="50%" y="70" text-anchor="middle" dy=".3em">Some text...</text>

  <circle cx="50" cy="250" r="50" class="circle"/>
  <text x="50" y="250" text-anchor="middle" dy=".3em">Some text...</text>

  <circle cx="195" cy="250" r="50" class="circle"/>
  <text x="195" y="250" text-anchor="middle" dy=".3em">Some text...</text>

  <circle cx="340" cy="250" r="50" class="circle"/>
  <text x="340" y="250" text-anchor="middle" dy=".3em">Some text...</text>
</svg>


      <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/javascript+original-1324760550805182024.png" alt="" />
                         </Tile>
                    </Col>
                    <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://kariselovuo.pro/ksprov1/wp-content/uploads/2018/02/css-logo.png" alt="" />
                         </Tile>
                    </Col>

                    <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/end+html+long+shadow+markup+language+technologies+web+web-1320184849523650358.png" alt="" />
                         </Tile>
                    </Col>
                    <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>
                     <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/shadow+python+script+language+web+web+technology+icon-1320184850274449141.png" alt="" />
                         </Tile>
                    </Col>

                    <Col className="col-2 p-0">
                         <Tile color={"#fff"} className="align-middle p-0 m-0">
                              <img className="logo"  src="https://icons-for-free.com/iconfiles/png/512/c+plain-1324760524666081672.png" alt="" />
                         </Tile>
                    </Col>
*/