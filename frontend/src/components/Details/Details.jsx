import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Center,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './Details.css'
import Navbar from '../Navbar/Navbar'

const Details = () => {

  const data=useSelector((store)=>{
    return store.GetReducers.detailsPageData
  })
  console.log(data)

  return (
      <div>
      <Navbar/>
        <Box className="details">
      <Box className="img-div">
        <img src={data.images} alt="img" />
      </Box>
      <Box className="box">
       <VStack>
        <h2>Name:- {data.name}</h2>
        <Center><h5 style={{fontSize:"1.5rem",marginTop:"20px"}}>Description</h5></Center>
        <p>{data.description}</p>
        <h3>Location:- {data.location}</h3>
        <h3>Price:- {data.price}L</h3>
        <Link to='/card'><button>Add to Card</button></Link>
       </VStack>
      </Box>
    </Box>
      </div>
  );
};

export default Details;
