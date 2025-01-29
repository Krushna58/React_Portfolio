import React from 'react'
import myphoto from '../assests/Krushna.png'
import './Home.css'
// import { Button } from 'bootstrap'
import Button from 'react-bootstrap/Button';
import react from '../assests/react.png'
import js from '../assests/JavaScript-logo.png'
// import html from '../assests/html.webp'
import css from '../assests/CSS-Logo.png'
import Education from './Education';


function Home() {
  return (
    <div style={{paddingBottom:"100px"}}>
      <div className='container-fluid'>

        <div className='row'>
            <div className='col col-md-8 bg-light'>

              <h1 style={{position:'relative',top:'200px'}}>
                <h2 className='josefin-sans'>Java Full-Stack Developer</h2>
                <Button variant="secondary">Secondary</Button>
                <p style={{fontFamily:'fantasy',padding:'20px' }} className='josefin-sans'>Worked on 2+ Project in my career</p>
              </h1>

              {/* <div id='data' style={{marginTop:"300px"}}></div> */}

                <img src={myphoto} className='img-fluid' style={{height:'500px',borderRadius:'50%', borderColor:'black',borderStyle:'solid'}}></img>

              <div className='child' id='child1'></div>
              <div className='child' id='child2'></div>
              <div className='child' id='child3'></div>
              <div className='child' id='child4'></div>
              <div className='child' id='child5'></div>
              

            </div>
            <div className='col col-md-4 bg-success' style={{backgroundColor:"purple"}}>

              <h1 style={{marginTop:'200px',color:'white'}} className='josefin-sans'> Krushna</h1>
              <h1 style={{marginLeft:'160px',color:'white'}} className='josefin-sans'>Bhosale</h1>
            </div>

        </div>
      </div>
      <Education/>
    </div>
  )
}

export default Home
