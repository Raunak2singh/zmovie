import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, CircularProgress, IconButton, Rating, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add, remove } from "../../Redux/FavSlice";



 const ItemBox = ({ id,poster, title, relaseDate, rating, orgLang }) => {
    const [like,setLike] = useState(false)
    const [load,setload]= useState(false)
    const dispacth =  useDispatch()

    const route = useRouter()
    const Move=()=>{
      setload(true)      
      setTimeout(()=>{
        route.push(`/Movie/${id}`)
        setload(false)      
      },500)
    }

    const handleClick=()=>{
      
      if(!like){
        dispacth(
          add(
            {id : id}
            )
            )
          }
          
          if(like){
            dispacth(
              remove(id)
              )
            }
            
            setLike(!like)
    }

  return (
    <Card sx={{ boxShadow: "0px 0px 10px 1px rgba(0,0,0,0.1)" }}>
     
      <CardActionArea onClick={()=>{Move(id)}} >
      {
        (load)?
          <Box sx={{display:"flex",position:"absolute",zIndex:1,justifyContent:'center',alignItems:"center",height:"100%",width:"100%"}}>
      <CircularProgress sx={{color:"#ffffff"}}/>
      </Box>
      :""
      }
      
        <CardContent>
          <Stack direction={"row"} alignItems={"center"}>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
                flexGrow: 1,
              }}
              >
              {title}{" "}
            </Typography>
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ height: { sm: "200px", md: "400px" } }}
          image={`https://image.tmdb.org/t/p/original${poster}`}
          />
      </CardActionArea>
        
      <CardContent>
        <Stack direction={"row"} alignItems="center">
          <Stack direction={"row"}  flexGrow={1}>
            <Typography>
              <span style={{ color: "gray", fontWeight: "800" }}>
                Rating :{" "}
              </span>
              ({rating})
            </Typography>
            <Rating value={(rating * 10 * 5) / 100} precision={0.5} readOnly />
          </Stack>
          <IconButton sx={{'&:hover':{color:"red"},color:`${(like)? "red": ""}`}}  onClick={()=>{handleClick()}}>
            {(like)?
            <FavoriteIcon />
            :
            <FavoriteBorderIcon />
            }
          </IconButton>
        </Stack>
        <Typography>
          <span style={{ color: "gray", fontWeight: "800" }}>language : </span>
          {orgLang}
        </Typography>
        <Typography>
          <span style={{ color: "gray", fontWeight: "800" }}>Relase : </span>
          {relaseDate}
        </Typography>
      </CardContent>
    </Card>
  );
};


export default ItemBox