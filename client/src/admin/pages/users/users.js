import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import { useState, useEffect } from "react";
import axios from "axios";
import UserDataTable from './userDataTable';

const Users = () => {

  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails=async()=> {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
      setUserDetails(response.data.userDetails)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  },[])

  return (
    <>
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
      {/* {userDetails.map((user,index) => (
         (<UserDataTable user={user} index={index} />)
      ))} */}

      <UserDataTable userDetails={userDetails} />
    
</div>
    </div>
    </>
  )
}

export default Users