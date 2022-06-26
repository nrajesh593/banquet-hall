import Slider from "./slider";
import 'react-image-gallery/styles/css/image-gallery.css';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../footer";
const Home = () => {
    return <>
    <h1 style={{textAlign:'center',fontFamily:'Brush Script MT, Brush Script Std, cursive',fontWeight:'300px',color:'#e53535',fontSize:'40px'}}>Sidharth Sagar Function Hall</h1>
    <Container fluid>
  <Row>
    <Col><Slider /></Col>
  </Row>
</Container>
    <Footer />
    </>;
  };
  
  export default Home;