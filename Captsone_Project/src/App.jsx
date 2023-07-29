import { useState } from 'react'
import Nav_Bar2 from './Components/Nav_Bar2'
import Register from './Components/Register'
import ImageIntro from './Components/Back_Image'
import DataCards from './Components/DataCards'
import CardsGrouped from './Components/CardsGrouped'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav_Bar2/>
    <ImageIntro/>
    {/*Section
      (1) What We Do
      (2) Cards Show: Data Analysis, LS-Plan, Communication, Create/Revise Assessments
      (3) Meet the Team
      (4) Contact
      //Registration Seperate Page and Login? 
    */}
    {/* <DataCards/> */}
    <CardsGrouped/>
    <Register/>
    </>
  )
}

export default App
