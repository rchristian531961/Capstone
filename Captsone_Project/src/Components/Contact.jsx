import DataCards from "./DataCards";
import dataTracking from "../Images/dataTracking.jpg"
import { CardGroup } from "react-bootstrap";
/*
        Need Container for Contact Info
        Contact Information can be cards: (By Phone, By Email, By TechSupport)
        */

function Contact() {
    const testingImage=dataTracking;
  return (
    <>
    <h1>Contact</h1>
    <CardGroup>
      <DataCards
      myImage={testingImage}
      myTitle="Testing Title"
      />
      <DataCards
      myImage={testingImage}
      myTitle="Testing Title"
      />
    <DataCards
      myImage={testingImage}
      myTitle="Testing Title"
      />
    </CardGroup>
    </>
  )
}

export default Contact;
