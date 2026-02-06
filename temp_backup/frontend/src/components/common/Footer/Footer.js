import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
       <div> 
       <Row>
          <Col md={4}>
            <div  className=" footer-card">
              <h1>Learn More</h1>
              <p>
                Vital Blog is an open platform where 0000.1 million readers come
                to find insightful and dynamic thinking. Here, expert and
                undiscovered voices alike dive into the heart of any topic and
                bring new ideas to the surface
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div  className=" footer-card">
              <h1>Make Vital Blog yours.</h1>
              <p>
                Follow the writers, publications, and topics that matter to you,
                and you’ll see them on your homepage and in your inbox.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <div  className=" footer-card">
              <h1>Write a story on Vital Blog</h1>
              <p>
                If you have a story to tell, knowledge to share, or a
                perspective to offer — welcome home. It’s easy and free to post
                your thinking on any topic.
              </p>
            </div>
          </Col>
        </Row>
       </div>
      </Container>
    </div>
  );
};

export default Footer;
