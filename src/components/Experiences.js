import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css/animate.min.css";
import epamLogo from "../assets/logos/epam_logo.png";
import sjsuLogo from "../assets/logos/sjsulogo.png";
import ibmLogo from "../assets/logos/IBM_LOGO.png";
import { ProfileImage } from "./ProfileImage";

const experiences = [
  {
    id: 1,
    title: "Research Assistant",
    company: "San Jose State University",
    dates: "March 2024 - June 2024",
    skills: ["Docker", "Fiber", "Grafana", "Prometheus", "DCGM exporter"],
    logo: sjsuLogo, // You would need to define 'sjsuLogo' similarly to how 'epamLogo' and 'ibmLogo' are defined
    description: [
      "Spearheaded cloud independence functionality by containerizing AI Testing Tool and LLMs, enabling multi-cloud deployments, and improving deployment efficiency by 30%.",
      "Engineered back-end APIs to automate deployment, enhancing speed and accuracy by 50% and 40% respectively.",
      "Architected a monitoring solution for GPU data visualization, cutting GPU downtime by 25% and enhancing system efficiency.",
    ],
  },
  {
    id: 2,
    title: "Software Engineer 2",
    company: "EPAM Systems",
    dates: "June 2023 - December 2023",
    skills: [
      "NextJS",
      "Jenkins",
      "Cypress",
      "React",
      "Storybook",
      "TypeScript",
    ],
    logo: epamLogo,
    description: [
      "Revamped website architecture, reducing load times by 60% and increasing user retention by 25%.",
      "Automated testing and deployment pipelines, cutting manual testing time by 80% and increasing release reliability by 95%.",
      "Orchestrated the creation of a component library, cutting feature development time by 30% and standardizing UI/UX across projects.",
      "Migrated legacy codebase to TypeScript, decreasing bug occurrences by 45% and improving maintainability by 50%.",
    ],
  },
  {
    id: 3,
    title: "Software Engineer 1",
    company: "EPAM Systems",
    dates: "July 2022 - May 2023",
    skills: ["NodeJS", "DynamoDB", "ReactJS", "TypeScript", "Jest"],
    logo: epamLogo,
    description: [
      "Pioneered RESTful microservices, doubling application scalability and cutting server response times by 20%.",
      "Developed reusable UI elements, boosting development velocity by 30% and reducing bugs by 15%.",
      "Deployed comprehensive Jest testing protocols, enhancing code robustness to 99% and reducing post-deployment bugs by 25%.",
      "Adopted agile methodologies, improving user satisfaction by 10% through rapid feature iteration and delivery.",
    ],
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "EPAM Systems",
    dates: "January 2022 - June 2022",
    skills: ["React", "JavaScript", "Node.js", "AWS", "DynamoDB"],
    logo: epamLogo,
    description: [
      "Designed and implemented a web application integrating AWS services, boosting performance by 30%.",
      "Optimized AWS infrastructure, securing 99.9% uptime and reducing storage costs by 30%.",
      "Enhanced system security protocols, implementing advanced AWS security features that reduced potential vulnerabilities by 40%.",
    ],
  },
  {
    id: 5,
    title: "AI Intern",
    company: "IBM",
    dates: "June 2020 - August 2020",
    skills: ["Machine Learning", "Data Analysis", "Python"],
    logo: ibmLogo,
    description: [
      "Developed and refined machine learning models to enhance data analytics capabilities, focusing on predictive analytics and pattern recognition.",
      "Collaborated with a team of data scientists to optimize model performance and improve accuracy.",
    ],
  },
  // Add more experiences as needed
];

export const Experiences = () => {
  return (
    <Container className="timeline-container">
      <Row className="justify-content-center">
        <Col md={12}>
          <h1 className="experience-title">Work Experience</h1>
        </Col>
      </Row>
      {experiences.map((exp, index) => (
        <TrackVisibility key={exp.id}>
          {({ isVisible }) => (
            <div
              className={
                isVisible ? "animate__animated animate__fadeInUp alexp" : ""
              }
            >
              <Row className={`timeline-item ${isVisible ? "isVisible" : ""}`}>
                <Col md={3} className="timeline-img">
                  <ProfileImage image={exp.logo} />
                  {/* <Image src={} alt={`${exp.company} logo`} fluid /> */}
                </Col>
                <Col md={9}>
                  <div className="timeline-content">
                    <h3>
                      {exp.title} at {exp.company}
                    </h3>
                    <p className="text-muted">{exp.dates}</p>
                    <ul className="skills-list">
                      {exp.skills.map((skill) => (
                        <li key={skill}>{skill}</li>
                      ))}
                    </ul>
                    <ul>
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
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
