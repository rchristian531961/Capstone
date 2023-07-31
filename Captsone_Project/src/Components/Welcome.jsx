import "../Styles/Image_Style.css"
import MyButton from "./MyButton"
import {Container} from "react-bootstrap"
import Reg_Log_Card from "./Reg_Log_Card"

export default function Welcome(){
    
    return(
        <div>
         <Container>
        <h1>
            Reach Every Student
        </h1>
        <h1 id="spacing_h1">
            See Every Student
        </h1>
        <h1 id="spacing_h1_2">
            Push Every Student
        </h1>
       
       <Container id="centering">
        <h4>
            Personalize learning experience and improve 
            results for each student with State Standardized Aligned Assessments 
        </h4>

        <MyButton/>

        </Container>

        </Container>
        
        </div>
    )
}