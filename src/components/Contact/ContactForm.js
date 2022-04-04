import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import emailjs from 'emailjs-com';
function ContactForm() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('react-port-gmail', 'react-port-temp', e.target, 'user_ocrWSE7sT6rOwFFmFfWjt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
    return (
        <>
         <Form style={{ textAlign: "left" }} onSubmit={sendEmail}>
              <Form.Group className="mb-3 fc">
                <Form.Control className="sub-fc" placeholder="Name" name="name"/>
              </Form.Group>
              <Form.Group controlId="formGridEmail" className="mb-3 fc">
                <Form.Control className="sub-fc" type="email" placeholder="Enter email" name="email"/>
              </Form.Group>
              <Form.Group className="mb-3 fc">
                <Form.Control className="sub-fc" as="textarea" rows={4} placeholder="Message....." name="message"/>
              </Form.Group>
              <Form.Group className="mb-4">
              <Button className="primary mt-3" type="submit" >
                Send Message
              </Button>
              </Form.Group>
            </Form> 
        </>
    );
}

export default ContactForm;
