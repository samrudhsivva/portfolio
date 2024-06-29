import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Row, Col, Container } from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import "animate.css";
import TrackVisibility from "react-on-screen"; // Import TrackVisibility

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={`skill-bx ${isVisible ? "animate__animated animate__fadeInUp" : ""}`}>
                  <h2>Skills</h2>
                  <p>
                    I possess a range of skills, including Web Development, where I'm an expert with 90% proficiency, building responsive and
                    scalable web applications using HTML, CSS, and JavaScript. In DevOps, I'm advanced with 80% proficiency, experienced in
                    implementing continuous integration and delivery pipelines using tools like Jenkins and Docker. I'm a master of Cloud Computing
                    with 95% proficiency, skilled in designing and deploying scalable cloud architectures on AWS and Azure. Additionally, I
                    have intermediate skills in Artificial Intelligence with 85% proficiency, familiar with building machine learning models
                    using TensorFlow and PyTorch. My Machine Learning skills are advanced with 92% proficiency, proficient in developing
                    predictive models using scikit-learn and Python. Finally, I have intermediate Data Science skills with 88% proficiency,
                    experienced in data analysis and visualization using pandas, NumPy, and Matplotlib.
                  </p>
                  <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                      <img src={meter1} alt="Web-Dev-expertise" />
                      <h5>Web Development</h5>
                    </div>
                    <div className="item">
                      <img src={meter2} alt="DevOps-expertise" />
                      <h5>DevOps</h5>
                    </div>
                    <div className="item">
                      <img src={meter3} alt="Cloud-expertise" />
                      <h5>Cloud</h5>
                    </div>
                    <div className="item">
                      <img src={meter1} alt="AI-expertise" />
                      <h5>AI</h5>
                    </div>
                  </Carousel>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
