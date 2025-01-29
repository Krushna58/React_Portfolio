import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
  return (
    <div>
      <div className="container-fluid" style={{backgroundColor:"lightblue",color:"black",padding:"70px"}}>
        <div className="row">
          <div className="col">
            <h1>Contact Me</h1>
            <p>Get In Touch</p>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
                <Form.Text className="text-muted">
                 
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email:</Form.Label>
                <Form.Control type="Email" placeholder="Enter Email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <textarea cols={80} rows={5}></textarea>
              </Form.Group>
              
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col">

            <div>
                <div className="icons" style={{marginTop:"100px" ,marginRight:"100px"}}>
                   
                    <p style={{marginRight:"170px"}}> <CallIcon></CallIcon>9764315302 </p>
                    <p><EmailIcon></EmailIcon> bhosalekrushna34@gamil.com</p>
                    <p><GitHubIcon></GitHubIcon> https://github.com/Krushna58</p>
                    <p style={{marginLeft:"210px"}}><LinkedInIcon></LinkedInIcon> https://www.linkedin.com/in/krushna-bhosale-2861b52b1/</p>
                                    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
