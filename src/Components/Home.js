import React from 'react';
import { motion } from 'framer-motion';
import myphoto from '../assests/Krushna.png';
import Button from 'react-bootstrap/Button';
import react from '../assests/react.png';
import js from '../assests/JavaScript-logo.png';
import css from '../assests/CSS-Logo.png';
import Education from './Education';
import './Home.css';

function Home() {
  return (
    <div className='home-container'>
      <div className='row'>
        {/* Left Section */}
        <motion.div 
          className='col-md-8 left-section'
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <h2 className='title'>Java Full-Stack Developer</h2>
          <p className='description'>Worked on 2+ projects in my career</p>
          <Button variant="dark" className='cta-button'>Hire Me</Button>
          <motion.img 
            src={myphoto} 
            className='profile-pic'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        
        {/* Right Section */}
        <motion.div 
          className='col-md-4 right-section'
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <h1 className='name'>Krushna</h1>
          <h1 className='surname'>Bhosale</h1>
        </motion.div>
      </div>

      {/* Animated Tech Icons */}
      <div className='tech-icons'>
        {[js, react, css].map((icon, index) => (
          <motion.div 
            key={index} 
            className='icon'
            style={{ backgroundImage: `url(${icon})` }}
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.5 }}
          />
        ))}
      </div>
      
      <Education/>
    </div>
  );
}

export default Home;
