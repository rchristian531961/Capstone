import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../Styles/Digital_Style.css"

function DigitalService(){
     {/*
        Needs Main Container for Picture and Text
        Left Side is Text and Right is Picture of (labtop/phone accesibility)
    */}

    const serviceText="Personalize learning,\n \tOne student at a time"

    return (
       <>
       <Container style={{width:"100%", height:"20em",border:"2px solid black",marginTop:"1rem"}}>
         <Row>
            <Col>
            <h2 style={{whiteSpace:"pre-line"}}>
               {serviceText}
            </h2>
            <h3>
               
            </h3>
            </Col>

            <Col>
            Nope
            </Col>
         </Row>
       </Container>
       </>
    )
}

export default DigitalService;