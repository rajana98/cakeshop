import React, { useEffect, useState } from 'react'
import { message } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column"
};

const EditProducts = ({ id, name, price }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [editProduct, setEditProduct] = useState({id,name,price})

    const handleNameChange = (event) => {
        setEditProduct({ ...editProduct, name: event.target.value });
      };

      const handlePriceChange = (event) => {
        setEditProduct({ ...editProduct, price: event.target.value });
      };


    const handleEditProduct = async () => {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name:editProduct.name, price:editProduct.price})
        }
        try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/products?id=${id}`, requestOptions)
            console.log(res, "@@@")
            if (res.status === 200) {
                const data = await res.json()
                setEditProduct(data.editProduct)
                console.log(data, "###")
                message.success("Products Edited successfully", [2])
                handleClose()
                return data
            } else {
                throw new Error("Unable to Edit the product")
            }
        } catch (error) {
            message.error(error.message, [2])
            return null
        }
    }

    return (
        <div>
            <Button onClick={handleOpen}><EditOutlined /></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography sx={{ color: 'green' }}>Name:</Typography>
                    <TextField
                        id="filled-required"
                        defaultValue={name}
                        variant="filled"
                        onChange={handleNameChange}
                    />
                    <Typography sx={{ color: 'green' }}>Price:</Typography>
                    <TextField
                        id="filled-required"
                        defaultValue={price}
                        variant="filled"
                        onChange={handlePriceChange}
                    />
                    <Button onClick={() => handleEditProduct()} >Save</Button>
                </Box>
            </Modal>

        </div>
    )
}

export default EditProducts
