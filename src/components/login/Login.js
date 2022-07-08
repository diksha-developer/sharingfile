import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import formimg from "../../Assets/image/downloadimg.png";


export const Login = () => {
 
  return (
    <Container>
      <div className="maincls">
        <div className="innercls">
          <img src={formimg} alt="formimg" className="imgcls" />
        </div>

        <div className="innerform">
          <h2 className="headtxt">Login Form</h2>
          <Form className="formcls" >
         
             <Form.Group className="mb-3" controlId="formBasicEmail">
           
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
               required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"  required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> 
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        
        </div>
      </div>
    </Container>
  );
};
