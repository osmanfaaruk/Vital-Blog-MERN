import React from "react";
import {  Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const HomeRightBar = () => {
  const notRunning = () => {
    Swal.fire({
      icon: "error",
      title: "Page is under construction, you can't visit now!!",
      width: 600,
      padding: "3em",
      background: "#fff",
      backdrop: `
          #d63031
          `,
    });
  };
  return (
    <div className="homeRightBarCard">
      {/* another part  */}

      <Card className="homeRightBarCard-card">
        <h1>Suggested blogs</h1>
        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              Understanding Scope and Scope Chain in JavaScript✌
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              Understanding Asynchronous JavaScript😋
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              3 Things All Entrepreneurs Should Be Aiming For 🔎
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              Simple tips for writing clean React components 😎
            </Link>
          </Card.Title>
          <Card.Text
            className="homeRightBarCard-text"
            to="#"
            onClick={notRunning}
          >
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              The Ultimate Guide To Get Started With Node.js 🤩
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>
      </Card>

      {/* another part  */}
      <Card className="homeRightBarCard-card">
        <h1>Most read</h1>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              13 JavaScript Hidden Hacks You Probably Never Heard of
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              5 Cool Modern JavaScript Features Most Developers Don’t Know🥳
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>

        <Card.Body>
          <Card.Title>
            <Link className="homeRightBarCard-link" to="#" onClick={notRunning}>
              {" "}
              Double Your React Coding Speed With This Simple Trick 🦾
            </Link>
          </Card.Title>
          <Card.Text className="homeRightBarCard-text">
            Posted at May 16, 2016 by Osman
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeRightBar;
