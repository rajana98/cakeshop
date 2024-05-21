import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import OrdersDescription from './ordersDescription'

const Orders = () => {
  return (
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
<OrdersDescription />
</div>
    </div>
  )
}

export default Orders