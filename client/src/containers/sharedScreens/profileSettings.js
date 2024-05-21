import { DownOutlined} from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {Link} from 'react-router-dom'
const items = [
  {
    key: '1',
    label: (
      <Link to='/changePassword'> Change Password</Link>
    ),
  },
  
  {
    key: '2',
    label: "Deactivate Account(disabled)",
    disabled: true,
  },
  {
    key: '3',
    danger: true,
    label: 'Forgot Password',
  },
];
const ProfileSettings = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Link onClick={(e) => e.preventDefault()}>
      <Space>
        Profile Settings
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
);
export default ProfileSettings;