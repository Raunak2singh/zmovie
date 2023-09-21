import { AppBar, Toolbar, Typography ,Box, Stack, Switch, Button, IconButton, Badge} from '@mui/material'
import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import Link from '../../Mui/Link'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from 'react-redux';

export  const LOGO =({flexG = 1})=>{
    return(
        <Box sx={{flexGrow:flexG}}>
        <Stack direction={"row"} alignItems={"center"}>
             <Box>
             <LiveTvIcon sx={{color:"red"}}/>
             </Box>
             <Typography sx={{fontSize:"20px",paddingLeft:"5px",fontWeight:"700",color:"#2E2E2E"}}>ZMovie</Typography>
        </Stack>
        </Box>
    )
}


function Navbar() {
      const state = useSelector((state) => state.fav)
      console.log(state)
  return (
        <AppBar position='sticky' sx={{background:"#ffffff",boxShadow:"none"}}>
                <Toolbar>
                  <Link href={'/'} noLinkStyle sx={{textDecoration:"none",flexGrow:1}}>
                        <LOGO/>
                  </Link>
                  <IconButton sx={{color:"red",fontSize:"50px"}}>
                        <Badge badgeContent={state.length} sx={{color:"red"}}>
                        <FavoriteIcon/>
                        </Badge>
                        </IconButton>
                </Toolbar>
        </AppBar>
  )
}

export default Navbar