import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Dashboard from '../components/Dashboard/Dashboard'
import Details from '../components/Details/Details'

const Allauth = () => {
  return (
    <div>
      <Routes>
        <Route path={'/'} element={<Dashboard/>}></Route>
        <Route path={'/details'} element={<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default Allauth
