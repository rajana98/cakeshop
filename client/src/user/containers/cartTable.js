import React from 'react'
import { Table } from 'antd';

const CartTable = (props) => {
    debugger
    console.log(props.productList,"hi")

    const columns = [
        {
          title: "Product's Name",
          dataIndex: 'productName',
        },
        {
            title: "Quantity",
            dataIndex: 'quantity',
            align: 'right',
          },
        {
          title: 'Price Per Item',
          className: 'column-money',
          dataIndex: 'money',
          align: 'right',
        },
        {
            title: 'Total Price',
            className: 'column-money',
            dataIndex: 'money',
            align: 'right',
        },
      ];

      const data = [
        {
          key: '1',
          name: 'John Brown',
          money: '￥300,000.00',
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          money: '￥1,256,000.00',
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          money: '￥120,000.00',
          address: 'Sydney No. 1 Lake Park',
        },
      ];

    return (
        <div>
            <Table
                columns={columns}
                dataSource={data}
                bordered
                title={() => 'Header'}
                footer={() => 'Footer'}
            />
        </div>
    )
}

export default CartTable