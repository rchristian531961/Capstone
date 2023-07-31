import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Container} from "react-bootstrap"
import "../Styles/Cards_Style.css"
import Standards from "../Images/Standards.jpg"
import Curriculum_pic from "../Images/Curriculum_pic.jpg"
import Diagnostic from "../Images/Diagnostic.jpg"
import data_education from "../Images/data_education.jpeg"
//src="holder.js/100px160"

function MyCard(props){

    const {myTitle,myImage,myText,myLink}=props;


    return (
    <Card className="space_items">
        <Card.Body style={{textAlign:"center"}}>
        <Card.Img style={{width:"12rem", height:"12rem",borderRadius:"10%" ,imageRendering:"pixelated"}}variant="top" src={myImage}/>
          <Card.Title>{myTitle}</Card.Title>
          <Card.Text>
            {myText}
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{border:"none",textAlign:"center",backgroundColor:"white"}}>
          <small className="text-muted"><a style={{textDecoration:"none"}}href="/">{myLink}</a></small>
        </Card.Footer>
      </Card>
    )
}

function CardGrouped2(){

    return(
        <>
        <Container>
            <CardGroup> {/*Space Each with ID */}
                
                <MyCard
                myImage={Curriculum_pic}
                myTitle="Comprehensive Curriculum"
                myText="Find Content to support all Standards"
                myLink="Browse Skills >"
                />

                <MyCard
                myImage={Diagnostic}
                myTitle="Real-Time Diagnostic"
                myText="Pinpoint your students needs"
                myLink="Learn how it works >"
                />

                <MyCard
                myImage={Standards}
                myTitle="EOC Standard Assessments"
                myText="Standard Based Assessments"
                myLink="Explore our items >"
                />

                <MyCard
                myImage={data_education}
                myTitle="Actionable Analytics"
                myText="Real-Time Data for EOC Prep"
                myLink="View Insights"
                />

            </CardGroup>
        </Container>
        </>
    )
}

export default CardGrouped2