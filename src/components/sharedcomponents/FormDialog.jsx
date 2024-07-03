import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React from 'react'

const FormDialog = (
    {
        open,
        setOpen,
        FormComponent,
        Title,
        Data
    }
) => {

    const handleClose=()=>{
        setOpen(false);
    }

    const onSaveClick=()=>{
        if(Title==="Add Employee"){
            const postData= {
               name: Data.name,
               email:Data.email,
               ctc:Data.ctc,
               designation:Data.designation
            }
            console.log(Data);
            fetch('http://localhost:8080/credmarg/add-employee', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                  alert('Post successfully created!');
                })
                .catch((error) => {
                  console.error('Error:', error);
                  alert('Error creating employee!');
                });
           setOpen(false)
        }else if(Title==="Add Vendor"){
            const postData= {
                name: Data.name,
                email:Data.email,
                upi:Data.upi
             }
             fetch('http://localhost:8080/credmarg/add-vendor', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Success:', data);
                  alert('Post successfully created!');
                })
                .catch((error) => {
                  console.error('Error:', error);
                  alert('Error creating vendor!');
                });
            setOpen(false)
        }
    }

    return (
        <>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>{Title}</DialogTitle>
            <DialogContent sx={{ width: "53.3vh" }}>
              <DialogContentText>
                <FormComponent Data={Data}/>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button onClick={onSaveClick}>Save</Button>
            </DialogActions>
          </Dialog>
        </>
      );
}

export default FormDialog