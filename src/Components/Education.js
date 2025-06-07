import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Education.css';
import Project from './Project';
import { motion } from 'framer-motion';

function Education() {
    let education = [
        {
            title: "BE in Computer Science",
            clg: "Sandip Institute Of Engineering And Management, Nashik",
            Year: "May 2024",
            Percentage: "Percentage/CGPA: 7.77"
        },
        {
            title: "Higher Secondary Certificate (HSC)",
            clg: "Late Shri Nathaji Patil Mhaske College of Education Rahata Ahmednagar",
            Year: "Jul 2020"
        },
        {
            title: "Secondary School Certificate (SSC)",
            clg: "Dnyanganga Vidyaniketan Junior College, Manchi Hill, Sangamner",
            Year: "June 2018"
        }
    ];

    return (
        <div className='education-container'>
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1 className='josefin-sans education-title'>My Education</h1>
                <p className='josefin-sans education-summary'>Summary of My Academic Background</p>
            </motion.div>

            <div className='education-cards'>
                {education.map((item, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Card className='education-card'>
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>
                                    <p>{item.clg}</p>
                                    <p>{item.Year}</p>
                                    {item.Percentage && <p>{item.Percentage}</p>}
                                </Card.Text>
                                <Button variant="primary">More Info</Button>
                            </Card.Body>
                        </Card>
                    </motion.div>
                ))}
            </div>
            <Project />
        </div>
    );
}

export default Education;
