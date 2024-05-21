import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { logoutResetDetails } from "../../redux/actions/userAction"
import './sharedScreen.css'

const ChangePassword = () => {

const navigate=useNavigate()
  const [isFormVisible, setIsFormVisible] = useState(true);
  const dispatch = useDispatch()
    const { _id } = useSelector(state => state.user)

  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      const { currentPassword, newPassword } = values;
  
      // Make API call to change password
      const response = await fetch(`${process.env.REACT_APP_API_URL}/changePassword?_id=${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await response.json();
      if (data.success) {
        message.success('Password has changed successfully');
        form.resetFields();
        dispatch(logoutResetDetails)
        setIsFormVisible(false);
        navigate('/')
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error('Failed to change password');
    }
  };

  return (
    <div className='changePassword text-center'>
      {isFormVisible && (
    <Form form={form} onFinish={handleSubmit}>
    <Form.Item
      label="Current password"
      name="currentPassword"
      rules={[{ required: true, message: 'Please input your current password' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="New password"
      name="newPassword"
      rules={[{ required: true, message: 'Please input your new password' },
      {
        validator: (rule, value, callback) => {
          const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
          if (!passwordRegex.test(value)) {
            callback('The password must contain at least 5 characters, including a letter and a number.');
          }
          callback();
        },
      },
    ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm new password"
      name="confirmPassword"
      dependencies={['newPassword']}
      hasFeedback
      rules={[
        { required: true, message: 'Please confirm your new password' },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject('The two passwords that you entered do not match!');
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Change password
      </Button>
    </Form.Item>
  </Form>
)}
  </div>
  )
}

export default ChangePassword