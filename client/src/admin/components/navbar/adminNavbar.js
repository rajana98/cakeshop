import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../images/admin.png'
import { GrLanguage } from 'react-icons/gr';
import Logout from '../../../components/logout';
import axios from 'axios';

const AdminNavbar = () => {

const [cartCount,setCartCount]=useState(0)

const fetchProductsCount= () => {
  axios.get(`${process.env.REACT_APP_API_URL}/carts/count`)
    .then((response) => {
      setCartCount(response.data)
      console.log(response.data,"@@")
    })
    .catch((error) => {
      console.error("Error fetching products count:", error);
    });
}

useEffect(() => {
  fetchProductsCount()
}, [])

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <img src={logo} height="50" alt="admin" loading="lazy" />

          {/* <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form> */}

         <h3 style={{color:"black"}}><GrLanguage /> English</h3>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <span className="badge badge-pill bg-danger">{cartCount}</span>
                <span><i className="fas fa-shopping-cart"></i></span>
              </Link>
            </li>
          </ul>
          <Logout />
        </div>
      </nav>
    </>
  )
}

export default AdminNavbar