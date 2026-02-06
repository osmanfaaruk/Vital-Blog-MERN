import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                <a href={`https://www.facebook.com/usmanfaroqq`} style={{color: "black"}}>
                  {" "}
                  <FaFacebookF />
                </a>
                <a href={`https://twitter.com/usmanfaroqq`} style={{color: "black"}}>
                  {" "}
                  <FaTwitter />
                </a>
                <a href={`https://github.com/usmanfaroqq`} style={{color: "black"}}>
                  {" "}
                  <FaYoutube />
                </a>
                <a href="*" style={{color: "black"}}>
                  {" "}
                  <ImSearch />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MiddleNavbar;
