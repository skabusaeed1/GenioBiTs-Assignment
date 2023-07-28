import React from 'react'
import {useState,useEffect} from 'react'
import Infocard from '../Infocard/Infocard'
import axios from 'axios'
import './Dashboard.css'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    const [state,setState]=useState([])
    const [search,setSearch]=useState("")
    const [data,setData]=useState([])

    useEffect(() => {
      const debounce = setTimeout(() => {
        if (search) {
          axios(
            `http://localhost:8080/info?q=${search}`
          ).then((res) => setState(res.data));
        }else{
          axios(
            `http://localhost:8080/info`
          ).then((res) => setState(res.data));
        }
      }, 1000);
      return () => clearTimeout(debounce);
      }, [search]);

      
    
  return (
    <div>
       <Navbar/>
      <div className='search-box'>
      <input placeholder='Search here' onChange={(e) => setSearch(e.target.value)}/>
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
