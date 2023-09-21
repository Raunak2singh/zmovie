import {
  Box,
  Container,
  Grid,
  Typography,
  CircularProgress,
  Pagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ItemBox from "../Components/ItemBox";
import Navbar from "../Components/Navbar";
import Loading from "../Components/Validations/Loading";
import { featchMovies } from "../Redux/MovieSlice";
import { STATUSES } from "../Redux/MovieSlice";
import Error from "../Components/Validations/Error";



function Main({page}) {
  const { data, status } = useSelector((state) => state.Movies);
  const dispacth = useDispatch();
 



  useEffect(() => {
    dispacth(featchMovies(page));
  },[]);

  if (status === STATUSES.LOADING) {
    return <Loading/>
  }

  if (status === STATUSES.ERROR) {
    return <Error/>;
  }

  return (
    <>
  
      <Container maxWidth="xl">
        <Box sx={{ padding: "" }}>
          {data != undefined ? (
            <Grid
              container
              spacing={1}
              columnSpacing={2}
              rowSpacing={5}
              justifyContent={"center"}
            >
              {data.results?.map((a) => {
                return (
                  <React.Fragment key={a.id}>
                    <Grid item xs={12} sm={6} md={4} xl={3}>
                      <ItemBox
                        id={a.id}
                        poster={a.poster_path}
                        title={a.title}
                        relaseDate={a.release_date}
                        rating={a.vote_average}
                        orgLang={a.original_language}
                      />
                    </Grid>
                  </React.Fragment>
                );
              })}
            </Grid>
          ) : (
            <Typography sx={{ color: "red" }}>Loading</Typography>
          )}
        </Box>
      </Container>
   
    </>
  );
}

export default Main;
