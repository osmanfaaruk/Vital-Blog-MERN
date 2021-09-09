import React from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { LOGOUT } from "../../../redux/types/AuthTypes";

const UpperNavbar = () => {
  const { user } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem("myToken");

    dispatch({ type: LOGOUT });
  };
  const link1 = user
    ? (
      (
        <Link className="top__banner-text" to="/">
          {" "}
          Home
        </Link>
      ))
    : (
        <Link className="top__banner-text" to="/dashboard">
          {" "}
          Write your content
        </Link>
      );
  const Links = user ? (
    <>
      {" "}
      <Link to="/new-post" className="top__banner-text ">
        Create Post
      </Link>{" "}
      //
      <Link className="top__banner-text gap-2" to="/dashboard">
        {user.name}
      </Link>{" "}
      / /
      <span
        className="top__banner-text  gap-2"
        onClick={logout}
        style={{ cursor: "pointer" }}
      >
        Logout
      </span>{" "}
    </>
  ) : (
    <>
      {" "}
      <Link to="/login" className="top__banner-text  ">
        Login
      </Link>{" "}
      / /
      <Link to="/register" className="top__banner-text  ">
        Register
      </Link>{" "}
    </>
  );

  return (
    <div className=" py-2 bg-dark border-bottom">
      <Container className="d-flex align-items-center justify-content-between ">
        <div className="list-unstyled d-flex align-items-center gap-4 ">
          {link1}
          <Link className="top__banner-text" to="/">
            About Us
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            Events
          </Link>
          <Link className="top__banner-text for-hidden" to="/">
            Policy
          </Link>
        </div>
        <div>{Links}</div>
      </Container>
    </div>
  );
};

export default UpperNavbar;
