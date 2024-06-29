import React, { useRef } from 'react';
import { Container, Image } from 'react-bootstrap';
import reactImage from '../assets/img/MyPic.jpg';
import "bootstrap/dist/css/bootstrap.min.css";

export const ProfileImage = ({image}) => {
    const imageRef = useRef(null);

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = imageRef.current.getBoundingClientRect();

        const x = clientX - left - width / 2;
        const y = clientY - top - height / 2;

        // Calculate rotation and shadow dynamically based on mouse position
        const rotateX = y / height * 30; // 30 is the max rotation angle for X
        const rotateY = x / width * -30; // 30 is the max rotation angle for Y
        const shadowX = x / width * 20;  // 20px max horizontal shadow
        const shadowY = y / height * 20; // 20px max vertical shadow

        imageRef.current.style.transform = `perspective(500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 20px red`;
    };

    const handleMouseLeave = () => {
        imageRef.current.style.transform = 'none';
        imageRef.current.style.boxShadow = 'none';
    };

    return (
        <Container className="p-5 d-flex justify-content-center">
            <div 
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ width: 500, height: 500, transition: 'transform 0.2s, box-shadow 0.2s' }}
            >
                <Image src={image} className='oval-logo' alt="Profile" ref={imageRef} fluid />
            </div>
        </Container>
    );
};
