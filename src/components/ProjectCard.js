import React from "react";
import { Col } from "react-bootstrap";
import "animate.css";

export const ProjectCard = ({ index, title, description, ImgUrl }) => {
  console.log("img url is ", ImgUrl);

  // Determine animation class based on index: even indices animate from the left, odd from the right
  const animationClass = index % 2 === 0 ? "animate__animated animate__fadeInLeft" : "animate__animated animate__fadeInRight";

  return (
    <Col sm={6} md={4}>
      <div className={`proj-imgbx ${animationClass}`}>
        <img src={ImgUrl} alt="project-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p> {/* Added description for completeness */}
        </div>
      </div>
    </Col>
  );
};
