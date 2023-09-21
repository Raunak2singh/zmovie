import { Box, Pagination } from '@mui/material';
import React from 'react'
import Navbar from '../Components/Navbar'
import Main from './Main'
import {  useDispatch } from "react-redux";
import { featchMovies } from "../Redux/MovieSlice"
function Index() {
  const [page, setPage] = React.useState(2);
  const dispacth = useDispatch()

  const handleChange = (event, value) => {
    dispacth(featchMovies(value));
    setPage(value)
  };

  return (
    <>
     <Navbar/> 
       <Main  page={page} />
       <Box sx={{ padding: "20px" ,position:"fixed",zIndex:1,display:'flex',flexDirection:"row",bottom:0,justifyContent:"center",alignItems:"center",width:"100%",background:"#ffffff"}}>
      <Pagination count={10} page={page} onChange={handleChange} />
      </Box>
    </>
  )
}

export default Index