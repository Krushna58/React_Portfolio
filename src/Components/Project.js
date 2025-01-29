import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card';
import Project1 from '../assests/project1.jpg'
import './Project.css'

function Project() {

    let Project=[{
        titel:"Project 1",
        info:"info This is project 1",
        link:"https://www.google.com"
    },
    {
        titel:"Project 2",
        info:"info This is project 2",
        link:"https://www.google.com"
    },
    {
        titel:"Project 3",
        info:"info This is project 3",
        link:"https://www.google.com"

    }
]
  return (


<div style={{backgroundColor:"E8F9FF"}}>   

  <div>
    
 {/* //empty fragment it will not create extra div tag */}

<h1 style={{textAlign:"left"}}>My Projects</h1>
<p>My Creation</p>

{
    Project.map((item)=>{
        return(
    
<Card style={{ width: '25rem', display:"inline-block",margin:"70px",backgroundColor:"#C5BAFF" }} className='card1'>
{/* <Card.Img variant="top" src={Project1} /> */}
      <Card.Body >
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="./Home">Demo Video</Card.Link>
        <Card.Link href="./Hoem">Source code link</Card.Link>
      </Card.Body>
    </Card>

    
        )
    })
}
    
    </div>          


</div>  
 
  )
}

export default Project
