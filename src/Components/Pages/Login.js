import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InfoIcon from '@mui/icons-material/Info';
import {useHistory}  from "react-router-dom";
import { useSnackbar } from 'notistack';
import './Login.css'


function Login() {
  const [Username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [worning,setworning]=useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const history=useHistory();

  const id="AnuragUniyal35@gmail.com";
  const pass="Anurag";

  const ValidateUser=()=>{
   if(Username===id && password===pass){
    enqueueSnackbar("Login Successfully",{variant:"success"}) ;
    setworning(false);
    history.push("/orderPage",{from:"/"});
    history.go("/orderPage",{from:"/"});
   }else{
     setworning(true);
   }
  }
  return (
    <div className='Login_container'>

     <Stack spacing={4} direction="column">
        <h1 className='Login_heading'>Login</h1>   
     <TextField
          id="outlined-multiline-flexible"
          label="Username/Email"
          multiline
          value={Username}
          maxRows={4}
          onChange={(e)=>{setUsername(e.target.value)}}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e)=>{setPassword(e.target.value)}}
        />
        <Button variant="contained" onClick={()=>{ValidateUser()}}>Login</Button>
        
        </Stack>
        {worning===true&&<p className='Login_worning'>Wrong Username or password entered <InfoIcon style={{fontSize:"2vh",alignSelf:"centre"}} /></p>}
    </div>
  )
}

export default Login
