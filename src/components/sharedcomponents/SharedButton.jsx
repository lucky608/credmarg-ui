import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function SharedButton({onClick,label}) {
  return (
   <>
      <Button sx={{marginLeft:"2%"}} variant="contained" onClick={onClick}>{label}</Button>
      </>
   
  );
}
