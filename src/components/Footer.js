import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col sm={6}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) => (
                <img
                  src={logo}
                  alt="Logo"
                  className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <TrackVisibility partialVisibility>
                {({ isVisible }) => (
                  <>
                    <a href="">
                      <img
                        src={navIcon1}
                        alt=""
                        className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}
                      />
                    </a>
                    <a href="">
                      <img
                        src={navIcon2}
                        alt=""
                        className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}
                      />
                    </a>
                    <a href="">
                      <img
                        src={navIcon3}
                        alt=""
                        className={`animate__animated ${isVisible ? "animate__zoomIn" : ""}`}
                      />
                    </a>
                  </>
                )}
              </TrackVisibility>
            </div>
            <p> CopyRight 2024. All Rights Reserved Samrudh</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
