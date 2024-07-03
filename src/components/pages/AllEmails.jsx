import React, { useEffect, useState } from 'react'
import DataTable from '../sharedcomponents/DataTable';

const AllEmails = () => {
    const [rows,setRows]=useState([]);
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
      }, []);
    
      const fetchData = () => {
        fetch('http://localhost:8080/credmarg/all-emailed-vendors')
          .then((response) => response.json())
          .then((json) => setRows(json))
          .catch((error) => console.error('Error fetching data:', error));
      };
  return (
    <div style={{marginTop:"10%"}}>
        <h3 style={{marginLeft:"5%"}}>All Emailed Vendors</h3>
 <DataTable headCells={headCells} rows={rows} isCheckBoxenable={false}/>
    </div>
  )
}

export default AllEmails