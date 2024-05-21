import React, { useState } from "react";
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import './handlePassword.css'
import { Field } from "formik";


const HandlePassword=()=>{

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return(
        <>
                <div className='pass-wrapper'>
                <Field name="password" placeholder="Password"
                    type={passwordVisible ? "text" : "password"} id="password" />
                <button type="button" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible/>}
                </button>
                </div>
                </>
    )

}
export default HandlePassword;