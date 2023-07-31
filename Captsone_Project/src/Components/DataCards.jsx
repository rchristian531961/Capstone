import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import dataTracking from "../Images/dataTracking.jpg"

function DataCards(props) {
    
    var {myImage,myTitle}=props

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={myImage}/>
      <Card.Body>
        <Card.Title>{myTitle}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default DataCards
// module.exports={DataCards,DataCardsServices};

