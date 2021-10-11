import {Col,Row,Container} from "react-bootstrap"
import "./skills.css"
import styled from 'styled-components'
// import {JavaScript} from '@styled-icons/simple-icons/Javascript'

const Tile = styled.div`
     width:100%;
     height:200px;
     background-color:${({color}) => color ? color : "white"};
     align-items:center;
     text-align:center;
`


export default function Skills () {
     return <div>
          <Container>
               <Row>
               <h1>💪Tech Stack and Skills : </h1>
               </Row>
               <Row className="px-5">
                    <div className="blob">test</div>
                    <div className="blob">test</div>
          <div>
          <div className="blob">test</div>
          <div className="blob blob-2">test</div>
               <div className="blob">test</div></div>     </Row>
          </Container>

          <Container>
               <Row>
                    <Col><h1>😎 Accomplishments : </h1></Col>
               </Row>
          </Container>
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