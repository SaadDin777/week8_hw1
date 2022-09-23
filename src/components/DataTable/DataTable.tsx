import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Ronaldo', firstName: 'Cristiano', age: 37 },
    { id: 2, lastName: 'Messi', firstName: 'Lionel', age: 35 },
    { id: 3, lastName: 'Jr', firstName: 'Neymar', age: 30 },
    { id: 4, lastName: 'Bale', firstName: 'Gareth', age: 33 },
    { id: 5, lastName: 'Haaland', firstName: 'Erling', age: null },
    { id: 6, lastName: 'Benzema', firstName: null, age: 34 },
    { id: 7, lastName: 'Jr', firstName: 'Vinicius', age: 22 },
    { id: 8, lastName: 'Kroos', firstName: 'Toni', age: 32 },
    { id: 9, lastName: 'Modric', firstName: 'Luca', age: 37 },
];

export const DataTable = () => {
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Sports In Our Collection</h2>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }