import React from "react";
import "./signup.css"
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import {message} from 'antd'


const SignupForm = () => {
  const navigate=useNavigate()

  // schema generation
  const SignUpSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First Name is required"),

    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last Name is required"),

    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(/^9\d{9}$/, 'Phone number must be a 10-digit number starting with 9'),

    email: Yup.string().email().required("Email is required"),

    address: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Address is required"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum"),
  });
  return (
    <>
    <div className="signup-container">
      <div className="sign-up-form">
        {/* using formik yup library for from validation */}
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phoneNumber: "",
            email: "",
            address: "",
            password: ""
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { resetForm }) => {
            const { confirmPassword, ...updatedValues } = values
            const requestOptions = {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(updatedValues),
            };
            try {
              const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, requestOptions)
              const data = await response.json()
              if(data){
                message.success(data.msg,[3])
                navigate('/')
              }
              else{
                message.error(data.error,[3])
              }
              resetForm({ values: "" });
            } catch (err) {
              alert(err);
            }
          }}
        >

          <Form className="form">

            <label htmlFor="firstName">First Name</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" />

            <label htmlFor="lastName">Last Name</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" />

            <label htmlFor="phone">Phone Number</label>
            <Field name="phoneNumber" type="number" />
            <ErrorMessage name="phoneNumber" />

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" />

            <label htmlFor="address">Address</label>
            <Field name="address" type="address" />
            <ErrorMessage name="address" />

            <label htmlFor="password">Password</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" />

            <h3>Are you a new user?</h3>

            <button type="submit">Sign Up</button>
          </Form>
        </Formik>
        <div className="nav-to-login">
        <span>
          Already have an account <Link to="/">Login..</Link>
        </span>
      </div>
      </div>
      </div>
    </>

  )
}

export default SignupForm