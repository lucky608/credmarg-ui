import React, { useEffect, useState } from "react";
import DataTable from "../sharedcomponents/DataTable";
import SharedButton from "../sharedcomponents/SharedButton";
import FormDialog from "../sharedcomponents/FormDialog";
import VedorForms from "../forms/VendorForms";

export const Vendor=()=>{
    const [selected, setSelected] = React.useState([]);
    const [open,setOpen]=useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [upi, setUpi] = useState();
    const [rows,setRows]=useState([]);

    const vendorData={
        name:name,
        email:email,
        upi:upi,
        setName:setName,
        setEmail:setEmail,
        setUpi:setUpi
    }
    const headCells = [
        {
          id: 'name',
          numeric: false,
          disablePadding: false,
          label: 'Full Name',
        },
        {
          id: 'email',
          numeric: true,
          disablePadding: false,
          label: 'Email',
        },
        {
          id: 'upi',
          numeric: true,
          disablePadding: false,
          label: 'UPI',
        }
      ];

      useEffect(() => {
        fetchData();
        setName();
        setEmail();
        setUpi();
      }, [open]);
    
      const fetchData = () => {
        fetch('http://localhost:8080/credmarg/all-vendors')
          .then((response) => response.json())
          .then((json) => setRows(json))
          .catch((error) => console.error('Error fetching data:', error));
      };
      
      const sendEmails=()=>{
        const postData = selected;
        fetch('http://localhost:8080/credmarg/send-email', {
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
      }
    return(
        <div style={{marginTop:"9%"}}>
        <SharedButton onClick={()=>{setOpen(true)}} label="add new vendor" />
       {selected.length>0 && <SharedButton onClick={sendEmails} label="send email" /> }
       <h3 style={{marginLeft:"5%"}}>All Vendors</h3>
       <DataTable headCells={headCells} rows={rows} isCheckBoxenable={true} setSelected={setSelected} selected={selected}/>
       <FormDialog open={open} setOpen={setOpen}  FormComponent={VedorForms} Title="Add Vendor" Data={vendorData} />
        </div>
    )
}