import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import './navbar.css'
import Logout from '../../../components/logout';
import { Link } from 'react-router-dom';

const UserNavbar = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);


    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: "80px" }}>
            <div className='userNavbar'>
                    <Nav className="me-auto my-2 my-lg-0">
                    <Link to="/"><h4>Bakery Shop</h4></Link>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/map">Map</Link>
                        <Link to='/orders'>Orders</Link>
                        <h3 className='show-time'>{currentTime.toLocaleString()}</h3>
                    </Nav>
                    </div>

                    {/* <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form> */}
                    <div className="ms-auto">
                    <Logout />
                    </div>
        </Navbar>
    </>
    );
}

export default UserNavbar;
