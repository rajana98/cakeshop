import React from 'react'
import { Link } from 'react-router-dom'
import { Spin } from 'antd';
import './productOrder.css'
import MyCartList from '../../components/list';

const ProductOrder = () => {
  return (
    <>
    <div>
    <div className='order-header'>
      <span><h3>Every milestones deserve to be celebrated ❤️️.<Spin /> Make your order now</h3></span>
      <Link to='/myOrders' style={{textDecoration:"none"}}>
        <h3 style={{color:"ThreeDHighlight"}}>My Orders</h3>
      </Link>
      <Link to='/'>
        <b className='bold-text'>Back to Home</b>
      </Link>
    </div>
    <MyCartList />
    </div>
    </>
  )
}

export default ProductOrder