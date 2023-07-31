import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import {Route,Routes} from 'react-router-dom'
import TeacherFeatures from './TeacherFeatures';

function Nav_Bar2() {

  const myRoutes=()=>{
   return( 
    <Routes>
      <Route path="/features" element={<TeacherFeatures/>}/>
      <Route path="/login" element={<Register/>}/>
      {/* <Route path="pricing" element={<Pricing/>}/> */}
    </Routes>
   )
  }

  return (
    <>
    
      <Navbar bg="primary" data-bs-theme="dark" sticky="top">
        
        <Container>
          <Navbar.Brand href="/home">AlStarz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/features">Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>

      </Navbar>
    </>
  );
}

export default Nav_Bar2;