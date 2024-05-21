import './sharedScreen.css'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ProfileSettings from "./profileSettings";
import { Card, Col, Row,Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

const Profile = () => {

  const { _id } = useSelector((state) => state.user);
  const [file, setFile] = useState(null);
  const [userDetails, setUserDetails] = useState({});


  const triggerImgSave = async () => {
    const formdata = new FormData();
    formdata.append("avatar", file);
    formdata.append("_id", _id);
    const res = await fetch(`${process.env.REACT_APP_API_URL}/profile`, {
      method: "POST",
      body: formdata,
    });
    const data = await res.json();
    if (data) {
      fetchUserDetails()
    }
  };

  const fetchUserDetails = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/users/${_id}`)
    .then((response) => {
        setUserDetails(response.data.userDetails);
      });
  };
  
  useEffect(() => {
    fetchUserDetails();
  }, []);
  console.log(file)

  return (
    <>
    <div className='card'>
      <Row gutter={16}>
    <Col span={20}>
      <Card title="Update Profile Picture" bordered={true}>
      <input type="file" onChange={(e) => {
            setFile(e.target.files[0])
          }}/>
          
          <Button onClick={() => triggerImgSave()} type="primary" icon={<DownloadOutlined />} >
          </Button>
          {userDetails.avatarName && <img src={require(`../../uploads/${userDetails.avatarName}`)} alt="Loading.." />}
      </Card>
    </Col>
    <Col span={20}>
      <Card title="User Description" bordered={true}>
      <div className="usertdetails">
      <h3>Name:<div></div><span>{userDetails.firstName} {userDetails.lastName}</span></h3>
      <h3>Email:<div></div><span>{userDetails.email}</span></h3>
              <h3>Phone Number:<div></div><span>{userDetails.phoneNumber}</span></h3>
              </div>
      </Card>
    </Col>
  </Row>
  <div className='actionBtn'>
    <Button type="dashed" ghost>
      <Link to='/profileSettings'><ProfileSettings /></Link>
      </Button>
      </div>
  </div>
    </>
  );
};
export default Profile;
