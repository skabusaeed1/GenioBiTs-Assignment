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
import {cardData} from '../../actions/actions'

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
        <h3>Price:- {data.price}</h3>
        <div style={{display:"flex",flexDirection:"column",gap:"8px",border:"1px solid black",padding:"5px",borderRadius:"5px"}}>
        <Center><h5 style={{fontSize:"1.5rem",color:"red"}}>Contact</h5></Center>
        <h4>Email:- realestate@gmail.com</h4>
        <h4>Phone No: + 91-9823931152</h4>
        </div>
        <Link><button onClick={()=>cardData(data)}>Add to Card</button></Link>
       </VStack>
      </Box>
    </Box>
      </div>
  );
};

export default Details;
