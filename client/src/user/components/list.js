import React, { useEffect, useState } from 'react'
import { Divider, List, Typography } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button,Modal,Input,Select,InputNumber} from 'antd';

const MyCartList = () => {

  const [cartProduct, setCartProduct] = useState([]);
  const { _id } = useSelector(state => state.user)
  const userId = _id
  const fetchCartProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/carts?userId=${userId}`);
      setCartProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchCartProducts()
  },[userId])

  const { Option } = Select;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const showModal = (item) => {
    setSelectedProduct(item);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const data = cartProduct.map((item,index) => (
    <div key={item._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span>{index+1}</span>
      <span>{item.productId.name}</span>
      <Button type='primary' onClick={() => showModal(item)}>Order Now</Button>
    </div>
  ));

  const [selectedQuantity, setSelectedQuantity] = useState(selectedProduct?.quantity); //optional chaining
const handleQuantityChange = (value) => {
  debugger
  setSelectedQuantity(value);
  calculateTotalPrice();
};

const initialPrice=selectedProduct?.productId.price
const [totalPrice, setTotalPrice] = useState(initialPrice);

const calculateTotalPrice = () => {
  if (selectedProduct && selectedProduct.productId && selectedQuantity) {
    setTotalPrice(initialPrice * selectedQuantity);
  }
  else{
    setTotalPrice(initialPrice)
  }
}

useEffect(() => {
  calculateTotalPrice();
}, [selectedProduct, selectedQuantity]);

console.log(initialPrice, "selectedProduct", totalPrice);

  const postOrders=async()=>{
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/orders`,
      {
        cartId:selectedProduct._id,
        quantity:selectedQuantity,
        totalPrice
      });
      console.log(response.data);
      setSelectedQuantity(response.data.quantity)
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      
    }
  };


  return (
    <div style={{width:"50%", margin:"auto"}}>
      <Divider orientation="left"></Divider>
      <List
        header={<div style={{textAlign:'center', fontSize:"22px"}}>My Cart List</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />

      {selectedProduct && (
        <Modal title="Mix our sweetness with your celebration 😍" 
        visible={isModalOpen} 
        onCancel={handleCancel}
        onOk={postOrders}
        >
          <Input.Group compact>
            <Input
              style={{
                width: '40%',
              }}
              defaultValue={selectedProduct.productId.name}
              disabled
            />
            <Input
              style={{
                width: '20%',
              }}
              defaultValue={"Rs. "+ selectedProduct.productId.price}
              disabled
            />
          </Input.Group>

          {selectedProduct.quantity > 10 ? (
            <InputNumber defaultValue={selectedProduct.quantity} style={{ width: '30%' }} onChange={handleQuantityChange} />
          ) : (
            <Select defaultValue={selectedProduct.quantity} style={{ width: '30%' }} onChange={handleQuantityChange}>
              {[...Array(10)].map((_, index) => (
                <Option key={index + 1} value={index + 1}>{index + 1}</Option>
              ))}
            </Select>
          )}

          <Typography>Total Price:{totalPrice}</Typography>
        </Modal>
      )}
    </div>
  )
}

export default MyCartList;
