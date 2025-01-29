import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Education.css'
import Project from './Project';

function Education() {

    let education=[
        {
            titel:"BE in computer Science",
            clg:"Sandip Institute Of Engineering And Management, Nashik",
            Year:"May 2024",
            Percentage:"Percentage/CGPA 7.77"
        },
        {
            titel:"Higher Secondary Certificate(HSC)",
            clg:"Late Shri Nathaji Patil Mhaske College of Education Rahata Ahmednagar",
            Year:"jul 2020"
            
        },
        {
            titel:"Secondary School Certificate (SSC)",
            clg:" Dnyanganga Vidyaniketan Junior College, Manchi Hill, Sangamner",
            Year:"june 2018"
            
        }
        
    ]
  return (
    <div>
        <div>
            <div className='row'>
                <div className='col'> 

                    <h1 className='josefin-sans' style={{textAlign:"left"} }>My Education</h1>
                    <p className='josefin-sans'>Summry Of My Academic Background</p>


               {
                education.map((item)=>{
                        return(
                            <Card style={{ width: '18rem',display:"inline-block",margin:"70px" }} className='card1'>
      
                            <Card.Body>
                              <Card.Title>{item.titel}</Card.Title>
                              <Card.Text>
                                <p>{item.clg}</p>
                                <p>{item.Year}</p>
                                <p>{item.Percentage}</p>
                              </Card.Text>
                              <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                          </Card>
                        )
                })
               }
     

                </div>
            </div>
        </div>
        <Project/>
      
    </div>
  )
}

export default Education
