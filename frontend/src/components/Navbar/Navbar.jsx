import React from 'react'
import {useState} from 'react'
import "./Navbar.css"
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import {NavLink} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {logout} from '../../actions/AuthActions'

const Navbar = () => {

  const [mobile,setMobile]=useState(false)
  const dispatch = useDispatch()

  const handlebtn=()=>{
    setMobile(!mobile)
  }
  const logoutUser=()=>{
    dispatch(logout())
  }

  return (
    <div>
      <div className='header'>
        <h1>Real Estate</h1>
        <div className={mobile ?"nav-menu active" : 'nav-menu'}>
          <NavLink style={{color:"black"}} to='/dashboard'> <p>Dashboard</p></NavLink>
          <NavLink style={{color:"black"}} to='/card'> <p>Card</p></NavLink>
          <NavLink style={{color:"black"}}><button onClick={logoutUser}>Logout</button></NavLink>
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
