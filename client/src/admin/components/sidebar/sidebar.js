import React ,{useState} from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { ImUsers } from 'react-icons/im';
import { FaProductHunt } from 'react-icons/fa';
import { FaJediOrder } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { FcHome } from 'react-icons/fc';

const MySidebar = () => {
  const [selectedColor, setSelectedColor] = useState('black');

  const handleColorChange=(color)=>{
      setSelectedColor(color)
  }

  return (
    <>
 <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <div className="text-decoration-none" style={{ color: 'inherit', fontSize: '24px'}}>
            Admin Panel
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
          <NavLink to="/" activeClassName="activeClicked">
          <CDBSidebarMenuItem ><FcHome />Home</CDBSidebarMenuItem>
          </NavLink>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem ><ImUsers />Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem ><FaProductHunt /> Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<FaJediOrder />} Orders</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/notifications" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<IoIosNotifications />} Notifications</CDBSidebarMenuItem>
            </NavLink> */}
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<TbDeviceAnalytics />} Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/sendMail" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<AiOutlineMail />} Send Email</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

    <div className="color-options" style={{backgroundColor:selectedColor}}>
      <button className="color-option" onClick={() => handleColorChange('grey')} >Grey</button>
      <button className="color-option" onClick={() => handleColorChange('green')}>Green</button>
    </div>
  
        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              marginTop:"80px"
            }}
          >
            Copyright @2022 All Rights Reserved.
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </>
  );
};

export default MySidebar;