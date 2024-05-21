import React from 'react'
import {DataGrid} from '@mui/x-data-grid';


const UserDataTable = (props) => {

    const columns = [
        {field: 'sn', headerName: 'S.N.', width: 40 },
        { field: 'id', headerName: 'ID', width: 180 },
        { field: 'firstName', headerName: 'First name', width: 100 },
        { field: 'lastName', headerName: 'Last name', width: 100 },
        { field: 'phoneNumber', headerName: 'Phone Number', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'address', headerName: 'Address', width: 130 },

        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,
          valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
      ];
      
      const rows = props.userDetails.map((user, index) => {
        return {
          sn: index + 1,
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          phoneNumber: user.phoneNumber,
          email: user.email,
          address: user.address,
        };
      });

  return (
    <>
         <div style={{ height: 650, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  )
}

export default UserDataTable