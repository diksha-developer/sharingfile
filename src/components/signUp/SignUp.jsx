import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/style.css";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";

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
      <h1 className="heading">SignUp</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <AiOutlineUser />
          <Form.Label className="signuplabel">FirstName</Form.Label>
          <Form.Control
            type="text"
            {...register("firstName", {
              required: true,
              pattern: /^(?=.*[ A-Za-z]).{1,15}$/,
            })}
            placeholder="Enter your Firstname"
          />
        </Form.Group>
        {errors.firstName && <p className="errors">Check FirstName </p>}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <AiOutlineUser />
          <Form.Label className="signuplabel">LastName</Form.Label>

          <Form.Control
            type="text"
            {...register("lastName", {
              required: true,
              pattern: /^(?=.*[ A-Za-z]).{1,15}$/,
            })}
            placeholder="Enter your Lastname"
          />
        </Form.Group>
        {errors.lastName && <p className="errors">Check Lastname</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <BsFillTelephoneFill />
          <Form.Label className="signuplabel">Contact</Form.Label>
          <Form.Control
            type="tel"
            {...register("contact", {
              required: true,
              pattern: /^(?=.*\d).{10}$/,
            })}
            placeholder="Enter your Contact Number"
          />
        </Form.Group>
        {errors.contact && <p className="errors">Enter right Contact number</p>}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <AiOutlineMail />
          <Form.Label className="signuplabel">Email address</Form.Label>
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
          <RiLockPasswordFill />
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
