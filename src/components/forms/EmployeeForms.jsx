import { Grid, TextField } from "@mui/material";
import React from "react";


const EmployeeForms = ({Data}) => {
   
    const onNameChange = (e) => {
        Data.setName(e.target.value);
    }
    const onEmailChange = (e) => {
        Data.setEmail(e.target.value);
    }
    const onCtcChange = (e) => {
        Data.setCtc(e.target.value);
    }
    const onDesignationChange = (e) => {
        Data.setDesignation(e.target.value);
    }

    return (
        <>
            <Grid container>
                <Grid>
                    <TextField
                        value={Data.name}
                        sx={{ marginRight: "5px" }}
                        id="standard-basic"
                        label="Employee Name"
                        variant="standard"
                        onChange={onNameChange}
                    />
                    <TextField
                        value={Data.designation}
                        id="standard-basic"
                        label="Designation"
                        variant="standard"
                        onChange={onDesignationChange}
                    />
                </Grid>
                <Grid>
                    <TextField
                        value={Data.email}
                        sx={{ marginRight: "5px" }}
                        id="standard-basic"
                        label="Email"
                        variant="standard"
                        onChange={onEmailChange}
                    />
                    <TextField
                        value={Data.ctc}
                        id="standard-basic"
                        label="CTC"
                        type="number"
                        variant="standard"
                        onChange={onCtcChange}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default EmployeeForms;