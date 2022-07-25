import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import formimg from "../../Assets/image/downloadimg.png";
import { useForm } from "react-hook-form";
//import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //const navigate = useNavigate();
  const onSubmit = (data) => {
    //navigate("/dashboard");
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
                  required: true,
                })}
                placeholder="email"
              />
              {errors.email && <p className="errors">Please enter Email</p>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="signuplabel">Password</Form.Label>

              <Form.Control
                type="password"
                {...register("password", {
                  required: true,
                })}
                placeholder="Password"
              />
              {errors.password && (
                <p className="errors">Please enter password</p>
              )}
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
