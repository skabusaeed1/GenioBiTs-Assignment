import logo from './logo.svg';
import './App.css';
import Signup from './components/Signup/Signup';
import Navbar from './components/Navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import Allauth from './Allauth/Allauth';

function App() {
  return (
    <div className="App">
     {/* <Signup/> */}
     {/* <Navbar/> */}
     {/* <Dashboard/> */}
     <Allauth/>
    </div>
  );
}

export default App;
