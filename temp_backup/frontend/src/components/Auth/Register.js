import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRegister } from "../../redux/asyncMethods/AuthMethods";
import toast, { Toaster } from "react-hot-toast";





const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { loading, registerErrors, user } = useSelector(
    (state) => state.AuthReducer
  );
  const handleInputs = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };
  const dispatch = useDispatch();
  const userRegister = async (event) => {
    event.preventDefault();
    dispatch(postRegister(state)); // Post data short code from async methods
  };
  // Showing Errors
  useEffect(() => {
    if (registerErrors.length > 0) {
      registerErrors.map((error) => toast.error(error.msg));
    }
  }, [registerErrors, user]);

  return (
    <>
      <Helmet>
        <title>User Signup</title>
        <meta name="description" content="User Signup" />
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
                <h1>Create your account</h1>
                <form onSubmit={userRegister}>
                  <div className="group">
                    <input
                      type="text"
                      name="name"
                      className="group__control"
                      placeholder="Name"
                      value={state.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="group">
                    <input
                      type="text"
                      className="group__control"
                      placeholder="username"
                    />
                  </div>
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
                      value={loading ? "...." : "Signup"}
                    />
                  </div>
                </form>
                <h4>
                  Have an account <Link to="/login">Login here</Link>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
