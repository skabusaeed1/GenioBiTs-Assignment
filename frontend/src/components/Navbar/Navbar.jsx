import React from 'react'
import {useState} from 'react'
import "./Navbar.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {NavLink} from 'react-router-dom'

const Navbar = () => {

  const [mobile,setMobile]=useState(false)

  const handlebtn=()=>{
    setMobile(!mobile)
  }

  return (
    <div>
      <div className='header'>
        <h1>Real Estate</h1>
        <div className={mobile ?"nav-menu active" : 'nav-menu'}>
          <NavLink style={{textDecoration:"none",color:"black"}}> <p>Dashboard</p></NavLink>
          <NavLink style={{textDecoration:"none",color:"black"}}> <p>Card</p></NavLink>
          <NavLink style={{textDecoration:"none",color:"black"}}><p>Logout</p></NavLink>
        </div>
        <div className='hamburger' onClick={handlebtn}>
          {
            mobile ? <ImCross/> : <FaBars/> 
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
