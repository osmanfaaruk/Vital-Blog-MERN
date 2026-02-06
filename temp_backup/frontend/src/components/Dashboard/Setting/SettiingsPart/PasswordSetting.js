import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SideBar from "../SideBar";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import { REMOVE_PROFILE_ERRORS } from "../../../../redux/types/ProfileTypes";
import { updatePassword } from "../../../../redux/asyncMethods/ProfileMethods";
import PostEditPageProgress from "../../../../skelatons/PostEditPageProgress";

const PasswordSetting = () => {
  const [state, setState] = useState({
    current: "",
    newPassword: "",
    userId: null,
  });
  const dispatch = useDispatch();
  const {push} = useHistory();
  const {
    user: { _id },
  } = useSelector((state) => state.AuthReducer);
  const { loading, redirect } = useSelector((state) => state.PostReducer);
  const { profileErrors } = useSelector((state) => state.UpdateName);
  const handleUpdatePassword = (event) => {
    event.preventDefault();
    dispatch(
      updatePassword({
        current: state.current,
        newPassword: state.newPassword,
        userId: _id,
      })
    );
  };
  useEffect(() => {
    // showing error
    if (profileErrors.length > 0) {
      profileErrors.map((error) => toast.error(error.msg));
      dispatch({ type: REMOVE_PROFILE_ERRORS });
    }
  }, [profileErrors]);
  useEffect(() => { // changing roue
    if (redirect) {
      push("/dashboard");
    }
  }, [redirect]);

  return !loading ? (
    <>
      <Container>
        <Helmet>
          <title>Change password - Vital Blog</title>
          <meta name="password" content="password" />
        </Helmet>
        <Toaster
          position="top-center"
          reverseOrder={true}
          toastOptions={{
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
              <h1>Email/Password</h1>
              <div className="profile__name">
                <div className="borderBottom">
                  <form onSubmit={handleUpdatePassword}>
                    <div>
                      <h3>Current password</h3>
                      <input
                        type="password"
                        className="profile__name-Input"
                        placeholder="Current Password"
                        name="password"
                        value={state.current}
                        onChange={(e) =>
                          setState({ ...state, current: e.target.value })
                        }
                      />
                    </div>
                    <br />
                    <br />

                    <div>
                      <h3>New password</h3>
                      <input
                        type="password"
                        className="profile__name-Input"
                        placeholder="New Password"
                        name="password"
                        value={state.newPassword}
                        onChange={(e) =>
                          setState({ ...state, newPassword: e.target.value })
                        }
                      />
                    </div>
                    <br />
                    <br />

                    <input
                      type="submit"
                      value="Change password"
                      className="create__post-submitBlogBtn"
                    />
                  </form>
                </div>
                {/* <p className="profile__name-text">
              {" "}
              Your name appears on your Profile page, as your byline, and in
              your responses. It is a required field.
            </p> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  ) : (
    <PostEditPageProgress />
  );
};

export default PasswordSetting;
