import React from 'react'
import ErrorPageImg from '../../images/errorPage.jpg'
import { NavLink } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div style={{textAlign:'center', padding:'10px'}}>
        <NavLink to='/' style={{position: "absolute",
            top: "3%",
            left: "50%",
            fontSize:'30px',
            transform: "translateX(-50%)",
            padding: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)"}} >Back to Home</NavLink>
        <img src={ErrorPageImg} alt='errroPage' style={{height:'400px', width:'500px', marginTop:'80px' }} />
    <h2>We are sorry but the page you are looking for does not exist.</h2>

    </div>
  )
}

export default ErrorPage