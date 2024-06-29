import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImg from "../assets/img/header-img.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { ProfileImage } from "./ProfileImage";
import reactImage from '../assets/img/MyPic.jpg';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "DevOps Engineer", "Cloud Engineer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100); // Faster typing speed
  const period = 2000; // Longer pause at the end

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTimeout(() => setDelta(50), period); // Faster deletion speed
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100); // Reset to original typing speed
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">
                    Welcome to Samrudh's Portfolio!
                  </span>
                  <h1>
                    {`Hi, I'm Samrudh Sivva `}
                    <span className="wrap">{text}|</span>{" "}
                    {/* Blinking cursor */}
                  </h1>
                  <p>About me!!!</p>
                  <button
                    className="btn btn-primary animate__animated animate__pulse animate__infinite"
                    onMouseEnter={() => console.log("Hovering")}
                    onClick={() => console.log("Let's connect")}
                  >
                    Let's Connect <ArrowRightCircle />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={6}>
            <ProfileImage  image={reactImage}/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
