import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Form } from "react-bootstrap";
import formimg from "../../Assets/image/downloadimg.png";
import { useForm } from "react-hook-form";
import "../../Assets/css/Style.css";
import { Link } from "react-router-dom";

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
                  required: true,
                })}
                placeholder="Enter email"
              />
            </Form.Group>
            {errors.email && <p className="errors">Please Enter Email</p>}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className="signuplabel">Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[A-Z]).{6,15}$/,
                })}
                placeholder="Password"
              />
            </Form.Group>
            {errors.password && (
              <p className="errors">
                Password should include(A,a,2,#@$%) and length(6-15)
              </p>
            )}
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <br />
      <Link to="/">If already don't have account so signUp ?</Link>
    </Container>
  );
};
