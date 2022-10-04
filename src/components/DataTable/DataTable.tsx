import React, {useState} from 'react';
import { DataGrid, GridColDef, GridSelectionModel } from '@mui/x-data-grid';
import { useGetData } from '../../custom-hooks';
import { serverCalls } from '../../api';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@mui/material';
import { SportForm } from '../../components/SportForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Sport Name',
    width: 90,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 90,
    editable: true,
  },
  {
    field: 'max_spped',
    headerName: 'Speed',
    width: 90,
    editable: true,
  },
  {
    field: 'traits',
    headerName: 'Traits',
    width: 90,
    editable: true,
  },
  {
    field: 'height',
    headerName: 'height',
    width: 90,
    editable: true,
  },
  {
    field: 'weight',
    headerName: 'Weight',
    width: 90,
    editable: true,
  },
];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
    let { sportData, getData } = useGetData()
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([])

    let handleOpen = () => {
        setOpen(true)
    }
  
    let handleClose = () => {
        setOpen(false)
    }
  
    let deleteData = () => {
        serverCalls.delete(`${gridData[0]}`)
        getData()
    }

    console.log(gridData)
    return (
      <div style={{ height: 400, width: '100%' }}>
        <h2>Sports In Our Collection</h2>
        <DataGrid
            rows={sportData}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            onSelectionModelChange = {(newSelectionModel) => {setData(newSelectionModel);}}
            {...sportData}  
				/>
        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update A Athlete</DialogTitle>
            <DialogContent>
              <DialogContentText>Sport id: {gridData[0]}</DialogContentText>
              <SportForm id={`${gridData[0]}`}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
        </Dialog>
      </div>
      );
}