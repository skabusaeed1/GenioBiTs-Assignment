import React from 'react'
import Navbar from '../Navbar/Navbar'
import './AddCard.css'
import {Image,Card,Stack,CardBody,Heading,Text,CardFooter,Button} from '@chakra-ui/react'
import {useState,useEffect} from 'react'
import {removeData} from '../../actions/actions'

const AddCard = () => {
  const [state,setState]=useState([])
 
  useEffect(()=>{
    var dataArr = JSON.parse(localStorage.getItem("card-data")) || [];
    setState(dataArr)
  },[state])

  console.log(state)
  return (
    <div>
      <div><Navbar/></div>
      <div className='heading'>Card Page</div>
      <div className='Addcard'>
      
       {
        state.length>0 && state.map((elem,index)=>{
          return <div className='card'>
        <div className='card-img'>
          <img src={elem.images} alt="" />
        </div>
        <div className='card-info'>
          <h1>Name:- {elem.name}</h1>
          <p>Type:- {elem.type}</p>
          <h3>Price:- {elem.price}</h3>
          <h3>Contact: +91-9823931152</h3>
        </div>
        <div>
          <button className='btn' onClick={()=>removeData(index)}>Remove</button>
        </div>
       </div>
        })
       }

      </div>
    </div>
  )
}

export default AddCard
