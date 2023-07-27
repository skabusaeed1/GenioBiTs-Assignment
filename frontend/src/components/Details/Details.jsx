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

  const {data}=useSelector((store)=>{
    return store.GetReducers
  })

  return (
      <div>
      <Navbar/>
        <Box className="details">
      <Box className="img-div">
        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyamin-mellish-1396122.jpg&fm=jpg" alt="img" />
      </Box>
      <Box className="box">
       <VStack>
        <h2>Name:- Mannat House</h2>
        <Center><h5 style={{fontSize:"1.5rem",marginTop:"20px"}}>Description</h5></Center>
        <p>Oceanfront Resort offers a blissful getaway with its stunning beachfront location. Guests can enjoy direct beach access, unwind with rejuvenating spa treatments, dine at the on-site restaurant, and stay active at the fitness centre.</p>
        <h3>Location:- Pune</h3>
        <h3>Price:- 30L</h3>
        <button>Add to Card</button>
       </VStack>
      