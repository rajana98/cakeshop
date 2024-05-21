import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SignupForm from '../../containers/auth/signup';
import Login from '../../containers/auth/login';
import Home from '../../user/containers/home/home';
import AboutUs from '../../user/containers/aboutUs/aboutUs';
import Contact from '../../user/containers/contact/contact';
import UserNavbar from '../../user/components/navbar/userNavbar';
import Profile from '../../containers/sharedScreens/profile';
import ErrorPage from '../../containers/errrorPage/errorPage';
import MyMap from '../../user/containers/map/map';
import AdminNavbar from '../../admin/components/navbar/adminNavbar';
import Users from '../../admin/pages/users/users';
import Products from '../../admin/pages/products/products';
import AdminHome from '../../admin/pages/adminHome/adminHome';
import ProfileSettings from '../../containers/sharedScreens/profileSettings';
import ChangePassword from '../../containers/sharedScreens/changePassword';
import Orders from '../../admin/pages/orders/orders';
import Analytics from '../../admin/pages/analytics/analytics';
import Notifications from '../../admin/pages/analytics/analytics';
import ProductOrder from '../../user/containers/productOrder/productOrder';
import MyOrders from '../../user/containers/productOrder/myOrders';
import SendMail from '../../admin/pages/sendMail/sendMail';


const RouteHandler = () => {
    const {phoneNumber} =useSelector(state=>state.user)
    if(phoneNumber===9864404715){
      return <AdminScreen />
    }else if(phoneNumber!==""){
      return <UserScreen />
    }
    else{
      return <AuthScreen />
    }
}
  const AuthScreen=()=>{
    return(
      <Routes>
        <Route exact path="/" element={<Login />} />
      <Route path="/signup" element={<SignupForm />} />
  <Route path='*' element={<ErrorPage />} />
  </Routes>
    )
  }

  const AdminScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<><AdminNavbar /><AdminHome /></>} />
        <Route path='/orders' element={<><AdminNavbar /><Orders /></>} />
        <Route path='/users' element={<><AdminNavbar /><Users /></>} />
        <Route path='/products' element={<><AdminNavbar /><Products /></>} />
        <Route path='/analytics' element={<><AdminNavbar /><Analytics /></>} />
        <Route path='/sendMail' element={<><AdminNavbar /><SendMail /></>} />
        {/* <Route path='/notifications' element={<><AdminNavbar /><Notifications /></>} /> */}
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  }


  const UserScreen=()=>{
    return(
      <Routes>
        <Route exact path='/' element={<><UserNavbar /><Home /></>} />
  <Route exact path='/contact' element={<><UserNavbar /><Contact /></>} />
  <Route exact path='/aboutus' element={<><UserNavbar /><AboutUs /></>} />
  <Route exact path='/profile' element={<><UserNavbar /><Profile /></>} />
  <Route exact path='/profileSettings' element={<><UserNavbar /><ProfileSettings /></>} />
  <Route exact path='/changePassword' element={<><UserNavbar /><ChangePassword /></>} />
  <Route exact path='/map' element={<><UserNavbar /><MyMap /></>} />
  <Route exact path='/orders' element={<><UserNavbar /><ProductOrder /></>} />
  <Route exact path='/myOrders' element={<><UserNavbar /><MyOrders /></>} />
    <Route path='*' element={<ErrorPage />} />
      </Routes>
    )
  }


export default RouteHandler