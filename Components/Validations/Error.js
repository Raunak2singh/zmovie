import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import RefreshIcon from '@mui/icons-material/Refresh';
import ErrorIcon from '@mui/icons-material/Error';
import { LOGO } from '../Navbar';
function Error() {
    const route = useRouter()




  return (
    <>
    <div style={{display:"flex",justifyContent:"center",padding:"10px"}}>
    <LOGO flexG={0}/>
     </div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"90vh",flexDirection:"column",gap:"10px"}}>
            
            <ErrorIcon sx={{color:"#d9d9d9",fontSize:"100px"}}/>
            <Typography sx={{color:"#d9d9d9",fontSize:"30px",fontWeight:"800",textAlign:"center"}}>
                <span style={{color:"#ff0040"}}>OOPS!</span> SOMETHING WENT WRONG!
            </Typography>
            <Button  variant='outlined' sx={{padding:"10px 20px"}} onClick={()=>{route.push('/')}} color="error"  >
                TRY AGAIN{"  "} 
                <RefreshIcon/>
            </Button>

    </div>
    </>
  )
}

export default Error