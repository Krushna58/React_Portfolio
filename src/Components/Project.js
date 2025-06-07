import React from 'react';
import { motion } from 'framer-motion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project1 from '../assests/project1.jpg';
import './Project.css';

function Project() {
  let projects = [
    {
      title: 'Project 1',
      info: 'This is project 1',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 2',
      info: 'This is project 2',
      link: 'https://www.google.com',
    },
    {
      title: 'Project 3',
      info: 'This is project 3',
      link: 'https://www.google.com',
    },
  ];

  return (
    <Container fluid style={{ backgroundColor: '#E8F9FF', padding: '50px' }}>
      <motion.h1 
        className="text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Creation
      </motion.p>
      <Row className="justify-content-center">
        {projects.map((item, index) => (
          <Col key={index} md={4} className="mb-4">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card style={{ backgroundColor: '#C5BAFF', borderRadius: '15px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} className='card1'>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{item.info}</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="./Home">Demo Video</Card.Link>
                  <Card.Link href="./Hoem">Source code link</Card.Link>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Project;