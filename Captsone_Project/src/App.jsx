import { useState } from 'react'
import Nav_Bar2 from './Components/Nav_Bar2'
import ImageIntro from './Components/Back_Image'
import CardsGrouped from './Components/CardsGrouped'
import Contact from './Components/Contact'
import DigitalService from './Components/DigitalService'
import TeacherFeatures from './Components/TeacherFeatures'
import CardGrouped2 from './Components/TCG'
import background_1 from "./Images/background_1.jpg"
import Register from './Components/Register'
import Reg_Log_Card from './Components/Reg_Log_Card'
// import './App.css'

function App() {
  {/*Section
      (1) What We Do
      (2) Cards Show: Data Analysis, LS-Plan, Communication, Create/Revise Assessments
      (3) Meet the Team
      (4) Contact
      //Registration Seperate Page and Login? 
    */}

  const [count, setCount] = useState(0)

  return (
    // <div style={{backgroundImage:`url(${background_1})`,backgroundRepeat:'no-repeat',width:"100vw",height:"100vh",backgroundSize:"cover",backgroundPosition:"center"}}>
    <div style={{backgroundColor:"darkcyan",width:"100vw", height:"100vh"}}>
    <Nav_Bar2/>
    <ImageIntro/>
    <CardGrouped2/>
    {/* <DigitalService/> */}
    {/* <Reg_Log_Card/> */}
    {/* <TeacherFeatures/> */}
    {/* <Contact/> */}
    {/* <Reg_Log_Card/> */}
    </div>
  )
}

export default App
