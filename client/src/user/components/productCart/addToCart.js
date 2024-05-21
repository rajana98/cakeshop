import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { message, Popconfirm } from 'antd';
import "../cart.css"

const AddToCart = ({ productList }) => {

  const [cartProduct, setCartProduct] = useState([]);
  const [isInCart, setIsInCart] = useState(false)
  const { _id } = useSelector(state => state.user)
  const userId = _id

  const fetchCartProducts = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/carts?userId=${userId}`);
      setIsInCart(true)
      setCartProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCartProducts()
  }, [])

  const removeCartProducts = async (productId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/carts/${productId}`);
      console.log(response, "response")
      setIsInCart(false);
      fetchCartProducts();
      message.success("Cart removed successfully!")
      console.log(response.data, "Cart removed successfully!");
    } catch (error) {
      console.error(error);
    }
  };


  const filteredCartProduct = cartProduct.filter((item) => {
    if (userId === item.userId._id) {
      return item;
    }
    return null;
  });
  console.log(filteredCartProduct, "filteredCartProduct")

  return (
    <div>
      <h5 style={{ color: "deeppink" }}>My Cart:</h5>
      <div>
        {filteredCartProduct.length > 0 ? (
          filteredCartProduct.map((item) => (
            <div key={item._id} className="cart-item">
              <span className="cart-item-name">{item.productId.name}</span>
              <Popconfirm
                title="Delete the Cart"
                description="Are you sure to delete this cart?"
                onConfirm={() => removeCartProducts(item.productId._id)}
                okText="Yes"
                cancelText="No"
              >
                <DeleteOutlined />
              </Popconfirm>
            </div>
          ))
        ) : (
          <div>Cart is empty!</div>
        )}
      </div>
    </div>
  )
}

export default AddToCart