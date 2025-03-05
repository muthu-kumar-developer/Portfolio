import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './assets/Home'
import Animat from './assets/Animat';
import "./App.css"


const App = () => {
    return (
        <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
    <Route path='animate' element={<Animat/>} />
      </Routes>
      
      </BrowserRouter>
   
        
        
            
        </>
    );
};

export default App;