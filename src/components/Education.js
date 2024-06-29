import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import TrackVisibility from 'react-on-screen';
import "animate.css/animate.min.css";

import sjsuLogo from '../assets/logos/sjsulogo.png';
import { ProfileImage } from './ProfileImage';
import jntuLogo from '../assets/logos/jntulogo.png';

export const educationData = [
    {
      id: 1,
      institution: "San Jose State University",
      degree: "MS in Software Engineering",
      period: "2024 - 2025",
      cgpa: "3.9 CGPA",
      logo: sjsuLogo,
      achievements: ["Projected Top 5% of class", "Research Assistant", "Dean's List"]
    },
    {
      id: 2,
      institution: "Jawaharlal Nehru Technological University",
      degree: "B.Tech in Computer Science Engineering",
      period: "2018 - 2022",
      cgpa: "9.16 CGPA, Gold Medalist",
      logo: jntuLogo,
      achievements: ["Topper of College", "Merit Certifications x3", "Best Outgoing Student 2022"]
    }
  ];
  

export const Education = () => {
  return (
    <Container className="education-container">
      <h1 className="experience-title">Education</h1>
      {educationData.map((edu) => (
        <TrackVisibility key={edu.id} partialVisibility>
          {({ isVisible }) => (
            <div className={isVisible ? "animate__animated animate__fadeInUp":""}>
            <Row className={`education-item ${isVisible ? "isVisible" : ""}`}>
              <Col md={3}>
              <div className='education-logo'>
              <ProfileImage image={edu.logo}/>
              </div>
              </Col>
              <Col md={9} className="content-background">
                <div className="education-details">
                  <h3>{edu.institution}</h3>
                  <p className="degree">{edu.degree} ({edu.period})</p>
                  <p className="cgpa">{edu.cgpa}</p>
                  <ul>
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </Col>
            </Row>
            </div>
          )}
        </TrackVisibility>
      ))}
    </Container>
  );
};

