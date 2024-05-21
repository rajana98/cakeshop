import React from "react";
import './login.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addUserDetails } from "../../redux/actions/userAction"
import { Link } from "react-router-dom";
import * as Yup from "yup";
import HandlePassword from "../../components/handlePasword";
import {message} from 'antd'
import { useDispatch } from "react-redux";


const Login = () => {

const dispatch=useDispatch()

    const loginSchema = Yup.object().shape({
        phoneNumber: Yup.string()
            .matches(/^\d+$/, 'Phone number can only contain digits')
            .min(10, 'Phone number must be at least 10 digits')
            .max(10, 'Phone number can only be 10 digits')
            .required('Phone number is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 8 characters')
            .max(50, 'Password can only be 50 characters or less')
            .required('Password is required'),
    });


    return (
        <>
        <div className="login-container">
                <div className="login-box" >
                    <div className="left-side">
                        <h5>Welcome to login page</h5>
                        <Formik
                            initialValues={{ phoneNumber: '', password: '' }}
                            validationSchema={loginSchema}
                            onSubmit={async (values, { resetForm }) => {
                                const requestOptions = {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(values),
                                }
                                const res = await fetch(`${process.env.REACT_APP_API_URL}/login`, requestOptions);
                                const data = await res.json()
                                if (data.isLogedin) {
                                    dispatch(addUserDetails(data.userData))
                                    message.success(data.msg,[2])

                                } else {
                                  message.error(data.errorMsg,[2],)
                                }
                                
                                resetForm({values: '' })
                            }
                            }
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <Field type="tel" name="phoneNumber" placeholder="Phone number" />
                                    <ErrorMessage name="phoneNumber" component="div" />
                                    <HandlePassword />
                                    <button type="submit" className="login-btn">
                                        Log in
                                    </button>
                                </Form>
                            )}
                        </Formik>

                    </div>
                    <div>
                        <span><Link to='/signup'>Create an account </Link></span>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Login;