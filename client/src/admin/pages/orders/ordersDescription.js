import { Button, Space, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';


const OrdersDescription = () => {

  const [ordersList, setOrdersList] = useState([])
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/orders`)
      setOrdersList(response.data)
      // console.log(response.data,"@@")
    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [])

  const columns = [
    {
      title: 'User Name',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Product Name',
      dataIndex: 'productName',
      key: 'productName',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unitPrice',
      key: 'unitPrice',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      key: 'totalPrice',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdDate',
      key: 'createdDate',
    },
  ];

  const data=ordersList.map((item,id)=>{
return ({
  key: id+1,
  userName: item.cartId.userId.firstName,
      phoneNumber:item.cartId.userId.phoneNumber ,
      productName:item.cartId.productId.name ,
      unitPrice:item.cartId.productId.price,
      quantity:item.quantity,
      totalPrice:item.totalPrice,
      createdDate:item.createdAt
})
  })
  // console.log(data,"data")

  return (
    <div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
export default OrdersDescription;