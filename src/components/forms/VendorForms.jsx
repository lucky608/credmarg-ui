import {  Grid, TextField } from "@mui/material";
import React from "react";


const VedorForms = ({Data}) => {
   
    const onNameChange = (e) => {
        Data.setName(e.target.value);
    }
    const onEmailChange = (e) => {
        Data.setEmail(e.target.value);
    }
    const onUpiChange = (e) => {
        Data.setUpi(e.target.value);
    }

    return (
        <>
            <Grid container>
                <Grid>
                    <TextField
                        value={Data.name}
                        sx={{ marginRight: "5px" }}
                        id="standard-basic"
                        label="Vendor Name"
                        variant="standard"
                        onChange={onNameChange}
                    />
                    <TextField
                        value={Data.upi}
                        id="standard-basic"
                        label="UPI"
                        variant="standard"
                        onChange={onUpiChange}
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
                </Grid>
            </Grid>
        </>
    );
};

export default VedorForms;