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
                         <h4 className="sub-heading">{"//"}💻 M.E.R.N. stack Developer,  🚩<code title="ctfs are cybersecurity capture the flag challenges"> C.T.F.</code> player</h4>
                         <h4 className="sub-heading">{"//"}💡 Converting ideas into URLs</h4>
                         <h4 className="sub-heading">{"//"}🏠 From Pune, Maharastra</h4>
                    </div>
               </Col>
               <Col className="col-12 col-lg-5 col-md-5 col-sm-12 order-md-1 order-sm-1 p-0 m-0">
               <div className="floating-pic">
               <Hero/>
               </div>
               </Col>
          </Row>
               </Container>
          <Container className="border my-3 py-5">
               <Row className="second text-center">
               <h1 className="text-match">Projects</h1>
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
          <Container className="py-5"></Container>
     </Col>
     </div>
}
AOS.init()

