import axios from 'axios'
import React, { useState } from 'react'
import { Alert } from 'antd';
import MySidebar from '../../components/sidebar/sidebar'

const SendMail = () => {

  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false);

  const postEmail = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/mail`, { email })
    setSuccess(true)
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
    console.log(response.data, response, "response")
  }

  return (
    <div className='home' style={{ display: "flex" }}>
      <div style={{ width: "25%" }}>
        <MySidebar />
      </div>
      <div style={{ width: "75%", marginTop: "30px" }}>

        <div>
          <h2>Send a message to users</h2>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button onClick={() => postEmail()}>
            Send Message
          </button>
          {success && (
            <Alert message='Email sent successfully' type='success' style={{maxWidth:"200px"}} />
          )}
        </div>
      </div>
    </div>
  )
}

export default SendMail