import React from 'react'
import {useState,useEffect} from 'react'
import Infocard from '../Infocard/Infocard'
import axios from 'axios'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    const [state,setState]=useState([])
    
    useEffect(() => {
        axios
          .get(`http://localhost:8080/info`)
          .then((res) => {
            setState(res.data);
            console.log(res.data);
          });
      }, []);
    
  return (
    <div>
       <Navbar/>
      <div className='search-box'>
      <input placeholder='Search here'/>
      <button>Search</button>
      </div>
      <div className='dashboard'>
      {
        state.map((src,index)=>{
          return  <Infocard src={src} key={index}/>
        })
      }
      </div>
    </div>
  )
}

export default Dashboard
