import { Box, Breadcrumbs, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React,{useEffect,useState} from 'react'
import useFetch from 'react-fetch-hook'
import Navbar from '../../Components/Navbar';
import Error from '../../Components/Validations/Error';
import Loading from '../../Components/Validations/Loading';
import Link from '../../Mui/Link';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';




const DataBox=({type,value,value2})=>{
  return(<Box sx={{display:"flex",alignItems:"center"}}>
     <Stack gap={"10px"} direction="row">
                <Typography sx={{color:"gray",flexGrow:1}}>{type}</Typography>
                <Typography sx={{color:"#ffffff"}}>:</Typography>
                <Typography sx={{color:"#ffffff"}}>{value}</Typography>
     
    </Stack>
  </Box>)
}

function MovieDetail() {
  const router = useRouter()
  const MovieId = router.query.id
  const { isLoading, data , error} = useFetch(
      `https://movie-task.vercel.app/api/movie?movieId=${MovieId}`
  );
  var detail = [] 

  console.log(MovieId)
  if(data){
     detail = Object.values(data)
   }

   console.log(detail)
  


    if(error){
      return <Error/>
    }
    
    if(isLoading || MovieId == undefined ){
      return  <Loading/>
    }

    // console.log(detail)
  return (
    <>
    <Navbar/>
      {detail.map((a)=>{
          return(
          <React.Fragment key={a.id}>
      <Box sx={{padding:"10px"}}>
        <Breadcrumbs aria-label="breadcrumb">
            <Link href="/">
              
               <Typography sx={{fontSize:"20px",fontWeight:"500",display:'flex',alignItems:"center",gap:"10px"}}>   <ArrowBackIcon/> Home</Typography> 
            </Link>
              <Typography sx={{fontSize:"20px",fontWeight:"500"}}>
                Detail
              </Typography>
        </Breadcrumbs>
      </Box>
        <Box
        sx={{backgroundImage:`url(https://image.tmdb.org/t/p/original${a.backdrop_path})`,height:"80vh",backgroundRepeat:"no-repeat",backgroundSize:'cover',display:{md:"flex",sm:"none",xs:"none"}}}
        >
          <Container maxWidth={"xl"}  >
              <Grid container>
                <Grid item xs={6} md={6}>
                  <Box sx={{display:'flex',height:{md:"80vh",sm:"100%",xs:"100%"},justifyContent:"center",alignItems:"center"}}>
                     
                      <img
                        src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                        style={{height:"400px",boxShadow:"0px 0px  100px 5px rgba(0,0,0,0.5)",borderRadius:"20px"}}
                        alt={a.title}
                        />
                      
                    </Box>
                      
                </Grid>
                <Grid item xs={6} md={6}>
                    <Box sx={{padding:"30px",display:'flex',flexDirection:"column",height:"80vh",background:"black",opacity:"0.9",boxShadow:"0px 0px 100px 10px rgba(0,0,0,0.1)",zIndex:0,borderRadius:"100p"}}>
                    
                      <Typography sx={{fontSize:"30px",color:"red",fontWeight:"800"}}>{a.title}</Typography>
                      <Typography sx={{fontSize:"20px",color:"#ffffff",fontWeight:"800",padding:"0px 10px"}}>{a.tagline}</Typography>
                      <Typography sx={{fontSize:"15px",color:"gray",fontWeight:"800",padding:"10px"}}>{a.overview}</Typography>
                       <DataBox type={"Release"} value={a.release_date} />
                       <DataBox type={"Budget"} value={a.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                       <DataBox type={"Popularity"} value={a.popularity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                       <DataBox type={"revenue"} value={a.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                       <Box  sx={{display:"flex",flexDirection:"row"}}>
                        <DataBox type="category" value={a.genres.map((g,i )=>{
                        return (<React.Fragment key={a.genres.id}> {" "}
                       {g.name}  {(i < a.genres.length - 1)? "|" : ""}
                         </React.Fragment>)
                       })}
                        />               
                  </Box>
                       
                    </Box>
                </Grid>
              </Grid>
          </Container>
      </Box>



        <Box sx={{display:{md:"none",sm:"block",xs:"block"}}}>
              <Box sx={{backgroundImage:`url(https://image.tmdb.org/t/p/original${a.backdrop_path})`  ,maxWidth:"100%",height:'200px',backgroundRepeat:"none",backgroundSize:"cover",display:'flex',justifyContent:"center",alignItems:"center"}}>
              <img
                        src={`https://image.tmdb.org/t/p/original${a.poster_path}`}
                        style={{height:"220px",marginTop:"20px",boxShadow:"0px 0px  100px 5px rgba(0,0,0,0.5)",borderRadius:"20px"}}
                        alt={a.title}
                        />
                      
              </Box>
              <Box sx={{padding:"30px",display:'flex',flexDirection:"column",height:"80vh",background:"black",opacity:"0.9",boxShadow:"0px 0px 100px 10px rgba(0,0,0,0.1)",zIndex:0,borderRadius:"100p"}}>
                    
                    <Typography sx={{fontSize:"30px",color:"red",fontWeight:"800"}}>{a.title}</Typography>
                    <Typography sx={{fontSize:"20px",color:"#ffffff",fontWeight:"800",padding:"0px 10px"}}>{a.tagline}</Typography>
                    <Typography sx={{fontSize:"15px",color:"gray",fontWeight:"800",padding:"10px"}}>{a.overview}</Typography>
                     <DataBox type={"Release"} value={a.release_date} />
                     <DataBox type={"Budget"} value={a.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                     <DataBox type={"Popularity"} value={a.popularity.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                     <DataBox type={"revenue"} value={a.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} />
                     <Box  sx={{display:"flex",flexDirection:"row"}}>
                      <DataBox type="category" value={a.genres.map((g,i )=>{
                      return (<React.Fragment key={a.genres.id}> {" "}
                     {g.name}  {(i < a.genres.length - 1)? "|" : ""}
                       </React.Fragment>)
                     })}
                      />               
                </Box>
                       
                    </Box>

        </Box>
          </React.Fragment>)
        })
    }
        
    </>
  )
}

export default MovieDetail;



