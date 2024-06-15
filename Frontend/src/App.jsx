import React from "react";
import Home from "./Home/Home";

import { Route, Routes } from 'react-router-dom';
import Courses from "./courses/Courses";
import Signup from './components/Signup';
import Login1 from "./components/Login1";
import ContactForm from "./components/Contacrt";
import About from './components/About'

 


export default function App() {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <div className="dark:bg-slate-900 dark:text-white">
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login1' element={<Login1/>}/>
      <Route path="/contact" element={<ContactForm/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>

    </div>
    


    
    </>
    
  )
}