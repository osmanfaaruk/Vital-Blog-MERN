import React from "react";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { ImSearch } from "react-icons/im";
import {Link} from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const LowerNavbar = () => {

  const notRunning = () => {
    Swal.fire({
      icon: 'error',
      title: "Page is under construction, you can't visit now!!",
      width: 600,
      padding: '3em',
      background: '#fff',
      backdrop: `
      #d63031
      `,
    })
  }

  return (
    <div className="shadow-sm  mb-5 rounded">
        <Container className="lower__navbar ">
        <Navbar  expand="lg" >
        <Nav> <Link to="/" className="lower__navbar-text gap-3" active>Home</Link> </Nav>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className="gap-5">
            <Nav><Link to="/" className="lower__navbar-text newsFeed" > News Feed</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">News</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Business</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Magazine</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Sport</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Arts</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Culture</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Politics</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Style</Link></Nav>
            <Nav><Link to="#"onClick={notRunning} className="lower__navbar-text">Travel</Link></Nav>
            </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-primary" className="lower__navbar-button"> <ImSearch /></Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
        </Container>
    </div>
  );
};

export default LowerNavbar;
