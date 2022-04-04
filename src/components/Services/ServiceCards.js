import React from "react";
import Card from "react-bootstrap/Card";
import Particle from "../Particle";
function ServiceCards(props) {
  return (
    <>
    
    <Card className="service-card-view">
    <Particle />
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
}
export default ServiceCards;
