import Image from 'react-bootstrap/Image';
import Students from "../Images/Students.jpeg"
import "../Styles/Image_Style.css"
import Welcome from "./Welcome"
import {Container} from "react-bootstrap"


function ImageIntro() {
    
  return (
  <>
  <div>
    <Container>
        <figure className="position-relative">
        <Image src={Students} alt="Student_Photo" fluid />
        <figcaption>
            <Welcome/>
        </figcaption>
        </figure>
        
    </Container>
  </div>
  </>
  )
}

export default ImageIntro;