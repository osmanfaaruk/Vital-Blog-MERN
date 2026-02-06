import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const SideBar = () => {
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
    <div className="sidebar">
      <Container>
        <Row>
          <Col md={4}>
            <div className="sidebar__setting">
              <h1>Settings</h1>
              <div className="sidebar__setting-list">
                <li className="links">
                  <Link className="links" to="/dashboard">
                    Blogs
                  </Link>
                </li>
                <li className="links">
                  <Link className="links" to="/me/profile">
                    Profile
                  </Link>
                </li>
                <li className="links">
                  {" "}
                  <Link className="links" to="/me/password">
                    Email/Password
                  </Link>
                </li>
                <li className="links">
                  {" "}
                  <Link className="links" to="#" onClick={notRunning}>
                    Connections
                  </Link>
                </li>
                <li className="links">
                  {" "}
                  <Link className="links" to="#"  onClick={notRunning}>
                    Membership
                  </Link>
                </li>
                <li className="links">
                  {" "}
                  <Link className="links" to="#"  onClick={notRunning}>
                    {" "}
                    Account
                  </Link>
                </li>

                <li className="links">
                  <Link className="links" to="#"  onClick={notRunning}>
                    Privacy
                  </Link>
                </li>
              </div>
              <div className="sidebar__sidebar-footer">
                <Link className="sidebar-footer" to="#"  onClick={notRunning}>
                  Help
                </Link>
                <Link className="sidebar-footer" to="#"  onClick={notRunning}>
                  Status
                </Link>
                <Link className="sidebar-footer" to="#"  onClick={notRunning}>
                  Privacy
                </Link>
                <Link className="sidebar-footer" to="#"  onClick={notRunning}>
                  Terms
                </Link>
                <Link className="sidebar-footer" to="#"  onClick={notRunning}>
                  About
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SideBar;
