import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import formimg from "../../Assets/image/downloadimg.png";
import { useForm } from "react-hook-form";


export const Test = () => {
  const {
    logform,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="">
      <div className="">
        <div className="">
          <img src={formimg} alt="formimg" className="imgcls" />
        </div>

        <div className="">
          <h2 className="headtxt">Login Form</h2>
          
          <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        type="text"
                        {...logform("firstName", { required: true, maxLength: 10 })}
                    />
                </Form.Field>
                {errors.firstName && <p>Please check the First Name</p>}
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
