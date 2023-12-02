import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Contact from './Routes/Contact';
import Detail from './Routes/Detail';
import Favs from './Routes/Favs';
import Home from './Routes/Home';
import './App.css';
import { useContextGlobal } from './Components/utils/global.context'


function App() {
  const { state } = useContextGlobal();
  const { theme } = state;

  return (
    <div className='container'>
      <Navbar/>
      <div className={`content ${theme}`}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/favs' element={<Favs/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
