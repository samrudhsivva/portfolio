import React from "react";
import {
  Row,
  Col,
  Container,
  Tab,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

export const Projects = () => {
  const projects = [
    {
      title: "Financial Data Analysis Platform",
      description:
        "Developed a robust financial data analysis platform using Python and Django that processes and visualizes real-time stock market data to help investors make informed decisions.",
      ImgUrl: projImg1,
    },
    {
      title: "E-Commerce Website",
      description:
        "Created a comprehensive e-commerce website with React and Node.js, managing product listings, customer accounts, and online transactions efficiently.",
      ImgUrl: projImg2,
    },
    {
      title: "Healthcare Appointment System",
      description:
        "Designed a scalable healthcare appointment scheduling system using Angular and Firebase, enabling patients to book and manage appointments online.",
      ImgUrl: projImg3,
    },
    {
      title: "Real-Time Chat Application",
      description:
        "Built a real-time chat application with JavaScript and Socket.io, supporting instant messaging, group chats, and media sharing.",
      ImgUrl: projImg1,
    },
    {
      title: "Smart Home Automation System",
      description:
        "Developed a smart home automation system using Arduino and Python, allowing remote control of lighting, heating, and security via a mobile app.",
      ImgUrl: projImg2,
    },
    {
      title: "Machine Learning Model for Fraud Detection",
      description:
        "Implemented a machine learning model using Scikit-Learn and TensorFlow to detect fraudulent transactions in a financial dataset with high accuracy.",
      ImgUrl: projImg3,
    },
    {
      title: "Social Media Analytics Dashboard",
      description:
        "Created a social media analytics dashboard using Tableau and Python, providing insights into user engagement and content performance across multiple platforms.",
      ImgUrl: projImg1,
    },
    {
      title: "Event Management System",
      description:
        "Designed an event management system with ASP.NET and SQL Server, facilitating the planning, organization, and management of events, including ticket sales and attendee tracking.",
      ImgUrl: projImg2,
    },
    {
      title: "Travel Booking Platform",
      description:
        "Developed a travel booking platform using Ruby on Rails, integrating flight, hotel, and car rental services for a seamless user experience.",
      ImgUrl: projImg3,
    },
    {
      title: "IoT-Based Environmental Monitoring System",
      description: "Built an IoT-based environmental",
      ImgUrl: projImg1,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <Row>
              <Col>
                <h2
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  Projects
                </h2>
                <p
                  className={
                    isVisible ? "animate__animated animate__fadeInUp" : ""
                  }
                >
                  Developed a financial data analysis platform using Python and
                  Django for real-time stock data visualization, and created an
                  e-commerce website with React and Node.js for efficient online
                  transactions. Designed a healthcare appointment system with
                  Angular and Firebase and built a real-time chat application
                  with JavaScript and Socket.io. Implemented a machine learning
                  model for fraud detection using Scikit-Learn and TensorFlow,
                  and developed a smart home automation system using Arduino and
                  Python. Created a travel booking platform with Ruby on Rails,
                  and an IoT-based environmental monitoring system with
                  Raspberry Pi and MQTT for real-time data visualization.
                </p>
                <Tab.Container id="projects-tabs" >
                  <Nav
                    variant="pills"
                    className={
                      isVisible ? "animate__animated animate__fadeInUp" : ""
                    }
                    defaultActiveKey="/home"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first" href="#">
                        Tab One
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" href="#">
                        Tab Two
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third" href="#">
                        Tab 3
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <TabContent>
                    <TabPane eventKey="first">
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} index={index} {...project} />
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane eventKey="second">
                      <Row>
                        {projects.map((project, index) => (
                          <p key={index}>
                            {project.title} - {project.description}
                          </p>
                        ))}
                      </Row>
                    </TabPane>
                    <TabPane eventKey="third">
                      <Row>
                        {projects.map((project, index) => (
                          <p key={index}>
                            {project.title} - {project.description}
                          </p>
                        ))}
                      </Row>
                    </TabPane>
                  </TabContent>
                </Tab.Container>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </Container>
      <img
        className="background-image-right animate__animated animate__fadeInRight"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
