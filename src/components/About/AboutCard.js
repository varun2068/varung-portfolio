import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="blue">Varun Gupta .</span>
            I'm currently pursuing <span className="blue">B.E.</span> in Computer Science in Chitkara University.
            <br /><br/>
            Capable of mastering new technolgies. I am always <span className="blue">energetic</span> and eager to learn new skills. Even though I take my work seriously, I do have a good sense of <span className="blue">humour</span>.
            <br /> <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
