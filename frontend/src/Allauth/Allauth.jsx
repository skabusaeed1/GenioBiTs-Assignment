import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import Details from '../components/Details/Details'
import AddCard from '../components/AddCard/AddCard'
import Signup from '../components/Signup/Signup'

const Allauth = () => {
  return (
    <div>
      <Routes>
        <Route path={'/dashboard'} element={<Dashboard/>}></Route>
        <Route path={'/details'} element={<Details/>}></Route>
        <Route path={"/card"} element={<AddCard/>}></Route>
        <Route path={'/auth'} element={<Signup/>}></Route>
      </Routes>
    </div>
  )
}

export default Allauth
