import React, { useState } from "react";
import { Modal, Form, Input, Button, message } from "antd";
import axios from "axios";
import MySidebar from "../../components/sidebar/sidebar";
import { IoIosAddCircle } from 'react-icons/io';

const Products = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState()
  const [productImage, setProductImage] = useState();

  const showModal = () => {
    setVisible(true);
  };


const handleImageUpload=(e)=>{
  setProductImage(e.target.files[0])
}

  const handleOk = (e) => {
    // console.log(e.target.value)
    e.preventDefault()

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("productImage", productImage);
    console.log("hello",productImage)
  

    axios.post(`${process.env.REACT_APP_API_URL}/products`, formData,{
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((res) => {
      console.log("abcde",res)
      console.log(res.data,"good")
      message.success("Product added successfully", [2])
      // setName('')
      // setPrice()
      // setSelectedFile('')
      // formData.delete('name');
      // formData.delete('price');
      // formData.delete('productImage');
      setVisible(false);
    })
      .catch((err) => alert(err, "Error"));
  };

  const handleCancel = () => {
    setVisible(false);
  };


  // const props = {
  //   name: 'file',
  //   action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  //   headers: {
  //     authorization: 'authorization-text',
  //   },
  //   onChange(info) {
  //     if (info.selectedFile.status !== 'uploading') {
  //       console.log(info.selectedFile, info.fileList);
  //     }
  //     if (info.file.status === 'done') {
  //       message.success(`${info.selectedFile.name} file uploaded successfully`);
  //     } else if (info.selectedFile.status === 'error') {
  //       message.error(`${info.selectedFile.name} file upload failed.`);
  //     }
  //   },
  // };

  return (
    <>
      <div className='home' style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <MySidebar />
        </div>
        <div style={{ width: "75%", marginTop: "30px", display: "flex", justifyContent: "center" }}>
          <Button type="primary" onClick={showModal}
            style={{ height: '300px', width: '500px', backgroundColor: '#25a5be', fontSize: "40px" }}>
            Add Product <IoIosAddCircle />
          </Button>
          <Modal
            title="Add Product"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Form >
              <Form.Item
                label="Name"
                name="name"
                value={name}
                rules={[{ required: true }]}
                onChange={(e) => setName(e.target.value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Price"
                name="price"
                value={price}
                rules={[{ required: true }]}
                onChange={(e) => setPrice(e.target.value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
                rules={[{ required: true }]}
                label="Product Image">
                <input type='file' onChange={handleImageUpload} />
              </Form.Item>
              <div style={{ textAlign: "center" }}>
                <Form.Item>
                  <Button
                    key="link"
                    href="https://google.com"
                    type="dashed"
                    onClick={handleOk}
                  >
                    Search on Google
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Products;
