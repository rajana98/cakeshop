import React from 'react'
import { EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, message } from 'antd';
import EditProducts from '../edit/editProducts';
const { Meta } = Card;

const Widget = (props) => {
  const {_id}=props.item
  // console.log(_id,"test")

const triggerDeleteProduct=async()=>{
   const requestOptions={
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({_id})
   }
   const res = await fetch(`${process.env.REACT_APP_API_URL}/products`,requestOptions);
  //  console.log(res)
   if(res.status===200){
    props.fetchProductsData()
    message.success("Products deleted successfully",[2])
  }
  else{
    message.error("Unable to delete the product",[2])
  }
}

// const triggerEditProduct=async()=>{
//   const requestOptions={
//     method:"PUT",
//     headers:{"Content-Type":"application/json"},
//     body:JSON.stringify({_id})
//   }
//   const res=await fetch(`${process.env.REACT_APP_API_URL}/products`,requestOptions)
//   console.log(res)
//   if(res.status===200){
//     props.fetchProductsData()
//     message.success("Products Edited successfully",[2])
//   }
//   else{
//     message.error("Unable to Edit the product",[2])
//   }
// }

  return (
    <>
    <Card
    style={{
      width: 300,
      backgroundColor: 'white',
      borderRadius: 8,
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
    }}
     cover={props.item?.productImage &&
     <img alt={props.item.productImage} 
    src={require(`../../../uploads/products/${props.item?.productImage}`)} 
    style={{ height: 250, objectFit: 'cover' }} />
    }
    actions={[
      <DeleteOutlined  key="delete" onClick={()=>triggerDeleteProduct()} />,
      <EditProducts id={_id} name={props.item.name} price={props.item.price} />,
      // <EditOutlined key="edit" onClick={()=>triggerEditProduct()} />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={props.item.name}
      description= {"Rs " + props.item.price}
    />
  </Card>
    </>
  )
}

export default Widget