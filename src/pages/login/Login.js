import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import formimg from "../../Assets/image/downloadimg.png";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
  
    <Container>
      <div className="maincls">
        <div className="innercls">
          <img src={formimg} alt="formimg" className="imgcls" />
        </div>

        <div className="innerform">
          <h2 className="headtxt">Login Form</h2>

          <Form className="fmcls" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="signuplabel">Email</Form.Label>
              <Form.Control
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email must valid",
                  },
                })}
                placeholder="Enter email"
              />
            </Form.Group>
            <p className="errors">{errors.email?.message}</p>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="signuplabel">Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[A-Z]).{6,15}$/,
                    message:
                      " Password must contain atlest 6 character, one uppercase , one lower case , one number and one special case character",
                  },
                })}
                placeholder="Password"
              />
            </Form.Group>
            <p className="errors">{errors.password?.message}</p>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  
  );
};
