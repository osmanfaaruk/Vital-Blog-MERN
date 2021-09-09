import React,{useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import dateFormat from "dateformat";
import { FaFacebookF,FaTwitter,FaYoutube } from "react-icons/fa";
import { ImSearch } from "react-icons/im";

const MiddleNavbar = () => {
  const now = new Date();
    // const [weather, setWeather] = useState({});
    // useEffect(() => {
    //     const url =("https://api.openweathermap.org/data/2.5/weather?q=Chittagong&appid=4e80c1b920436fddba5e5b7d817167d9")
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(data => {setWeather(data)})
    // },[])
  return (
    <div>
      <div className="middle-header">
        <Container className=" align-items-center justify-content-between ">
          <Row>
            <Col md={4}>
                
            </Col>
            <Col md={4}>
              <div className="header__name">
                <h1>Vital Blog</h1>
                <h5>{dateFormat(now, "dddd, mmmm dS, yyyy")}</h5>
              </div>
            </Col>
            <Col md={4}>
              <div className="header__icons gap-4 ">
                <Link to="/" style={{color: "black"}}>
                  {" "}
                  <FaFacebookF />
                </Link>
                <Link to="/" style={{color: "black"}}>
                  {" "}
                  <FaTwitter />
                </Link>
                <Link to="/" style={{color: "black"}}>
                  {" "}
                  <FaYoutube />
                </Link>
                <Link to="/" style={{color: "black"}}>
                  {" "}
                  <ImSearch />
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MiddleNavbar;
