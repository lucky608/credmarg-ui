import { useEffect, useState } from "react";
import DataTable from "../sharedcomponents/DataTable"
import SharedButton from "../sharedcomponents/SharedButton";
import FormDialog from "../sharedcomponents/FormDialog";
import EmployeeForms from "../forms/EmployeeForms";

export const Employee=()=>{

    const [open,setOpen]=useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [ctc, setCtc] = useState();
    const [designation, setDesignation] = useState();
    const [rows,setRows]=useState([]);
    
    const employeeData={
        name:name,
        email:email,
        ctc:ctc,
        designation:designation,
        setName:setName,
        setEmail:setEmail,
        setDesignation:setDesignation,
        setCtc:setCtc
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
          id: 'designation',
          numeric: true,
          disablePadding: false,
          label: 'Designation',
        },
        {
          id: 'ctc',
          numeric: true,
          disablePadding: false,
          label: 'CTC',
        }
      ];
      
      useEffect( () => {
        fetchData();
        setCtc();
        setName();
        setEmail();
        setCtc();
        setDesignation();
      }, [open]);
    
      const fetchData = () => {
        fetch('http://localhost:8080/credmarg/all-employees')
          .then((response) => response.json())
          .then((json) => setRows(json))
          .catch((error) => console.error('Error fetching data:', error));
      };

    return(
        <div style={{marginTop:"9%"}}>
         <SharedButton onClick={()=>{setOpen(true)}} label="add new employee" />
         <h3 style={{marginLeft:"5%"}}>All Employees</h3>
       <DataTable headCells={headCells} rows={rows} isCheckBoxenable={false}/>
       <FormDialog open={open} setOpen={setOpen}  FormComponent={EmployeeForms} Title="Add Employee" Data={employeeData} />
        </div>
    )
}