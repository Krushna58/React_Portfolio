import React from 'react'
import '../Components/Nav.css'
import Home from './Home'
import Education from './Education'
import { NavLink, Route, Routes } from 'react-router-dom'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'
import { Container } from '@mui/material'
import Navbar from 'react-bootstrap/Navbar';
import { motion } from 'framer-motion';

function Nav() {

  return (
  <div>
        <nav>
            <div>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/education'}>Education</NavLink>
            <NavLink to={'/project'}>Project</NavLink>
            <NavLink to={'/contact'}>Contact</NavLink>

            </div>
            
        </nav>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/education' element={<Education/>}></Route>
        <Route path='/project' element={<Project/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
      
      <Footer/>
    </div>
  )
}

export default Nav
