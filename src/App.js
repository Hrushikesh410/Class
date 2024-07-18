import './App.css';
import React, { useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Lab6 from './components/Lab6';
import Login from './components/Login';
function App() {
  const [first, setfirst] = useState("")
  const demo=(de)=>{
    setfirst(de);
  }
  return ( 
    <div className='bg-grey-50'>
    <h1>{first}</h1>
    <BrowserRouter>
    <Navbar/>
    <Lab6/>
    <Login/>
      <Routes>
      <Route path='/about' element={<About />}/>
        <Route path='/' element={<Home send={demo}/>}/>
        
      </Routes>
    </BrowserRouter>
    </div>
  ); 
}  
export default App;
