import React, { useEffect, useState, useRef } from 'react'
import { Button, Divider, Table } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReactToPrint from 'react-to-print';

const MyOrders = () => {

    const { _id } = useSelector(state => state.user)
    const userId = _id

    const [myOrdersList, setMyOrdersList] = useState([])
    const fetchMyOrders = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/myOrders/userId=${userId}`)
            setMyOrdersList(response.data)
            console.log(response.data, "@@")
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyOrders()
    }, [])

    console.log(myOrdersList, "myOrdersList")

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
        },
    ];

    const data = myOrdersList
        .filter((item) => item.cartId.userId._id === userId)
        .map((item, id) => ({
            key: id + 1,
            name: item.cartId.productId.name,
            unitPrice: item.cartId.productId.price,
            quantity: item.quantity,
            totalAmount: item.totalPrice,
        }));

    const tableRef = useRef()

    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Divider>My Order Lists</Divider>
            {data.length > 0 ? (
                <>
                    <Table columns={columns} dataSource={data} size='middle' ref={tableRef} />
                    <ReactToPrint trigger={() => <Button>Print</Button>} content={() => tableRef.current} />
                </>
            ) : (
                <h1 style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>No Orders Found</h1>
            )}

        </div>
    )
}

export default MyOrders