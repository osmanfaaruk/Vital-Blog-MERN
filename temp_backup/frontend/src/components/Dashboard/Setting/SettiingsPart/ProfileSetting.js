import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../SideBar";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { updateNameMethod } from "../../../../redux/asyncMethods/ProfileMethods";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { REMOVE_PROFILE_ERRORS } from "../../../../redux/types/ProfileTypes";

const ProfileSetting = () => {
  const [nameState, setNameState] = useState("");
  const {
    user: { name, _id },
  } = useSelector((state) => state.AuthReducer);
  const { loading, redirect } = useSelector((state) => state.PostReducer);
  const { profileErrors } = useSelector((state) => state.UpdateName);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const updateName = (event) => { // updating name
    event.preventDefault();
    dispatch(updateNameMethod({ name: nameState, id: _id }));
  };

  useEffect(() => { // getting name
    setNameState(name);
  }, []);
  useEffect(() => { // showing error
    if (profileErrors.length > 0) {
      profileErrors.map((error) => toast.error(error.msg));
      dispatch({type: REMOVE_PROFILE_ERRORS})
    }
  }, [profileErrors]);
  useEffect(() => { // changing roue
    if (redirect) {
      push("/dashboard");
    }
  }, [redirect]);


  return (
    <Container>
      <Helmet>
        <title>Profile - Vital Blog</title>
        <meta name="profile" content="profile" />
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
      <Row>
        <Col md={4}>
          <SideBar />
        </Col>
        <Col md={8}>
          <div className="profile">
            <h1>Profile</h1>
            <div className="profile__name">
              <h3>Name</h3>
              <div className="borderBottom">
                <form onSubmit={updateName}>
                  <input
                    type="text"
                    className="profile__name-Input"
                    placeholder="Name"
                    name="name"
                    value={nameState}
                    onChange={(e) => setNameState(e.target.value)}
                  />
                  <input
                    type="submit"
                    value="Update Name"
                    className="create__post-submitBlogBtn"
                  />
                </form>
              </div>
              <p className="profile__name-text">
                {" "}
                Your name appears on your Profile page, as your byline, and in
                your responses. It is a required field.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSetting;
