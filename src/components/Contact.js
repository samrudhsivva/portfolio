import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import image from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    const result = await response.json();
    setButtonText("Send");
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({ success: false, message: "Something went wrong!!!" });
    }
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <TrackVisibility partialVisibility>
          {({ isVisible }) => (
            <Row className="align-items-center">
              <Col
                md={6}
                className={`text-center ${
                  isVisible ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                <img src={image} alt="Contact-Pic" />
              </Col>
              <Col
                md={6}
                className={`text-center ${
                  isVisible ? "animate__animated animate__fadeInUp" : ""
                }`}
              >
                <h2>Get in Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    {Object.entries(formDetails).map(([key, value], index) => (
                      <Col
                        sm={6}
                        key={key}
                        className={`px-1 ${
                          isVisible
                            ? `animate__animated ${
                                index % 2 === 0
                                  ? "animate__fadeInLeft"
                                  : "animate__fadeInRight"
                              }`
                            : ""
                        }`}
                      >
                        <input
                          type={
                            key === "email"
                              ? "email"
                              : key === "phone"
                              ? "tel"
                              : "text"
                          }
                          value={value}
                          placeholder={
                            key.charAt(0).toUpperCase() + key.slice(1)
                          }
                          onChange={(e) => onFormUpdate(key, e.target.value)}
                        />
                      </Col>
                    ))}
                    <Col sm={12} className="px-1">
                      
                      <button type="submit">{buttonText}</button>
                    </Col>
                    {status.message && (
                      <Col sm={12} className="px-1">
                        <div className={status.success ? "success" : "error"}>
                          {status.message}
                        </div>
                      </Col>
                    )}
                  </Row>
                </form>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};
