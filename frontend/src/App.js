import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import AddCard from './components/AddCard/AddCard';
import Details from './components/Details/Details';
import Allauth from './Allauth/Allauth';
import {Route,Routes,Navigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useState} from 'react'

function App() {
  const user = useSelector((state) => state.authReducer.authData)
 
  console.log(user)
  return (
    <div className="App">
    {/* <Dashboard/> */}
     <Routes>
     <Route path="/" element={user ? <Dashboard/> : <Navigate to="auth"/>}/>
          <Route path="/dashboard" element={user? <Dashboard/> : <Navigate to='../auth'/>} />
          <Route path="/auth" element={user? <Navigate to="../dashboard"/> : <Signup/>}/>
          <Route path={"/details"} element={user? <Details/>: <Navigate to={"../auth"}/>}/>
          <Route path={"/card"} element={user? <AddCard />: <Navigate to={"../auth"}/>}/>
     </Routes>
    </div>
  );
}

export default App;
