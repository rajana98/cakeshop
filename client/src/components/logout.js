import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutResetDetails } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { VscAccount } from 'react-icons/vsc';
import './logout.css'
import { Dropdown, Menu,Button } from 'antd';

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const triggerLogout = () => {
    dispatch(logoutResetDetails())
    navigate('/')
  }

  const menu = (
    <Menu>
      <Menu.Item key="0" >
        <Link to="/profile" style={{textDecoration:"none"}}>Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <Button type="primary" shape="rectangle" onClick={() => triggerLogout()}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="icon">
    <div className="user_details">
      <Dropdown overlay={menu} trigger={['click']}>
        <Link to="#">
          <VscAccount style={{ height: '40px', width: '40px' }} />
        </Link>
      </Dropdown>
      
    </div>
  </div>
  )
}

export default Logout
