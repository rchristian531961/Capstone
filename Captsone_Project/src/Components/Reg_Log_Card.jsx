import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function Reg_Log_Card(){

  // #2ebf91
  // #00416a
  
    return(
        <Card style={{ width: '16rem',textAlign:"center",backgroundColor:"#00416a",color:"white"}}>
      
      <Card.Body>
        <Card.Title>Sign In</Card.Title>
        <Card.Text>
          Already registered? Sign in with your AlstarZ account.
        </Card.Text>
      </Card.Body>
      <Card.Body>
      <Button className="btn-block"variant="primary" size="md" active>
        Sign-In
      </Button>
      </Card.Body>
      <Card.Text>
        <Card.Link><small>Forgot Username or Password</small></Card.Link>
      </Card.Text>
      <Card.Body>
        <Card.Title>Register Now</Card.Title>
        <Card.Text>Need access? Start here!</Card.Text>
        <Card.Body>
        <Button className="btn-block" variant="primary" size="md" active>
        Student
      </Button>
        </Card.Body>
        <Card.Body>
        <Button className="btn-block" variant="primary" size="md" active>
        Educator
      </Button>
        </Card.Body>
      </Card.Body>
    </Card>
    )
}