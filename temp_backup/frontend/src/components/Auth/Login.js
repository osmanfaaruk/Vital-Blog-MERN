import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { postLogin } from "../../redux/asyncMethods/AuthMethods";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const dispatch = useDispatch();
  const {loginErrors, loading, user} = useSelector(state => state.AuthReducer)
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleInputs = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const userLogin = (event) => {
    event.preventDefault();
    dispatch(postLogin(state));
  };
  useEffect(() =>  {
    if (loginErrors.length > 0) {
      loginErrors.map((error) => toast.error(error.msg));
    }
  }, [loginErrors, user])
  return (
    <>
      <Helmet>
        <title>User Login</title>
        <meta name="description" content="User Login" />
      </Helmet>
      <Toaster
        position="top-center"
        reverseOrder={true}
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            color: "red",
            fontSize: "1.5rem",
          },
        }}
      />
      
      <Container>
        <Row>
          <Col md={12}>
            <div className="account">
              <div className="account__section">
                <h1>Please login your account</h1>
                <form onSubmit={userLogin}>
                  <div className="group">
                    <input
                      type="email"
                      name="email"
                      className="group__control"
                      placeholder="Email"
                      value={state.email}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="password"
                      name="password"
                      className="group__control"
                      placeholder="Password"
                      value={state.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="submit"
                      className="loginRegisterBtn"
                      value={loading ? '......' : "Login"}
                    />
                  </div>
                </form>
                <h4>
                  {" "}
                  Don't have an account <Link to="/register">Create one</Link>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
