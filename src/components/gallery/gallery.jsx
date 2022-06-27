
import StickyFooter from '../stickyfooter';
import GridGallery from './gridGallery';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Gallery = () => {

    return <>
    <br></br>
    <h1 style={{textAlign:'center',fontFamily:'Brush Script MT, Brush Script Std, cursive',fontWeight:'300px',color:'#e53535',fontSize:'40px'}}>With love here comes the memories</h1>
  
    <Container fluid>
  <Row>
    <Col><GridGallery /></Col>
  </Row>
</Container>

<br></br>
    <StickyFooter />
    </>;
  };
  
  export default Gallery;