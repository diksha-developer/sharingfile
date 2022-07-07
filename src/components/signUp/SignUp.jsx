import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="signUpContainer">
      <h1>SignUp</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>FirstName</Form.Label>
          <Form.Control
            type="text"
            {...register("firstName", { required: true, maxLength: 10 })}
            placeholder="Enter your Firstname"
          />
        </Form.Group>
        {errors.firstName && (
          <p className="errors">FirstName max-length is 10</p>
        )}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>LastName</Form.Label>
          <Form.Control
            type="text"
            {...register("lastName", { required: true, maxLength: 10 })}
            placeholder="Enter your Lastname"
          />
        </Form.Group>
        {errors.lastName && <p className="errors">Lastname max-length is 10</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            type="tel"
            {...register("contact", {
              required: true,
              maxLength: 10,
              minLength: 10,
            })}
            placeholder="Enter your Contact Number"
          />
        </Form.Group>
        {errors.contact && <p className="errors">Contact length is 10</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            {...register("email")}
            placeholder="Enter email"
          />

          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="password">Password</Form.Label>
          <Form.Control
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
            placeholder="Password"
          />
        </Form.Group>
        {errors.password && (
          <p className="errors">
            Password should include(A,a,2,#@) and length(6-15)
          </p>
        )}
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
