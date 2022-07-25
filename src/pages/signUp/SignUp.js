import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { useForm } from "react-hook-form";
import { AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { handleSignUp } from "../../services/ApiServices";

const SignUp = () => {
  const [msg, setMsg] = useState("");

  const [formValues, setFormValues] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

  const onChangeHandle = (e) => {
    const { value, name } = e.target;
    setFormValues((prevSt) => {
      return { ...prevSt, [name]: value };
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const handleResFromSignUpAPI = (res) => {
    console.log(res);
    setMsg(res.data.msg);
    toast(res.data.msg);
    console.log(res.data.accessToken);
    localStorage.setItem("jwtToken", res.data.accessToken);
    navigate("/login");
  };

  const onSubmit = async () => {
    try {
      const res = await handleSignUp(formValues);
      handleResFromSignUpAPI(res);
    } catch (error) {
      error.response.data.errors.map((err) => {
        return toast(err.msg);
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mainDiv">
        <div className="signUpContainer">
          <h1 className="heading">SignUp</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <AiOutlineUser />
              <Form.Label className="signuplabel">Name</Form.Label>
              <Form.Control
                type="text"
                {...register("fullname", {
                  required: true,
                  pattern: /^(?=.*[ A-Za-z]).{1,25}$/,
                })}
                placeholder="Enter your name"
                name="fullname"
                value={formValues.fullname}
                onChange={onChangeHandle}
              />
            </Form.Group>
            {errors.fullname && <p className="errors">Check Name </p>}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <BsFillTelephoneFill />
              <Form.Label className="signuplabel">Contact</Form.Label>
              <Form.Control
                type="tel"
                {...register("phone", {
                  required: true,
                  pattern: /^(?=.*\d).{10}$/,
                })}
                placeholder="Enter your Contact Number"
                name="phone"
                value={formValues.phone}
                onChange={onChangeHandle}
              />
            </Form.Group>

            {errors.phone && (
              <p className="errors">Enter valid Contact number</p>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <AiOutlineMail />
              <Form.Label className="signuplabel">Email address</Form.Label>
              <Form.Control
                type="email"
                {...register("email", { required: true })}
                placeholder="Enter email"
                name="email"
                value={formValues.email}
                onChange={onChangeHandle}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            {errors.email && <p className="errors">Email is required</p>}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <RiLockPasswordFill />
              <Form.Label className="signuplabel">Password</Form.Label>
              <Form.Control
                type="password"
                // name="password"
                // value={formValues.password}
                {...register("password", {
                  required: true,
                  pattern:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*[A-Z]).{8,15}$/,
                })}
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={onChangeHandle}
              />
            </Form.Group>
            {errors.password && (
              <p className="errors">
                Password length(8-15) and must contain each
                <br /> (Uppercase,lowercase,special symbol,Digit)
              </p>
            )}
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
            {/* <p id="message"></p> */}
          </Form>
          <Link to="/login" style={{ fontSize: 16 }}>
            If user already register, go to login
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
