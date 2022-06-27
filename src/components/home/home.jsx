import Slider from "./slider";
import 'react-image-gallery/styles/css/image-gallery.css';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StickyFooter from "../stickyfooter";
const Home = () => {
    return <>
    <h1 style={{textAlign:'center',fontFamily:'Brush Script MT, Brush Script Std, cursive',fontWeight:'300px',color:'#e53535',fontSize:'40px'}}>Sidharth Sagar Function Hall & Hotel</h1>
    <Container fluid>
  <Row>
    <Col><Slider /></Col>
  </Row>
</Container>
    <StickyFooter />
    </>;
  };
  
  export default Home;