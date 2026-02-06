import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateImage } from "../../redux/asyncMethods/PostMethods";
import toast, { Toaster } from "react-hot-toast";
import { REMOVE_UPDATE_IMAGE_ERRORS } from "../../redux/types/PostTypes";

const EditCoverImage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { push } = useHistory();

  const { updateImageErrors } = useSelector((state) => state.UpdateImage);
  const { loading, redirect } = useSelector((state) => state.PostReducer);
  const [state, setState] = useState({
    image: "",
    imagePreview: "",
  });
  const imageHandle = (event) => {
    if (event.target.files.length > 0) {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setState({
          ...state,
          imagePreview: fileReader.result,
          image: event.target.files[0],
          imageName: event.target.files[0].name,
        });
      };
      fileReader.readAsDataURL(event.target.files[0]);
    }
  };
  const handleUpdateImage = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    formData.append("image", state.image);
    dispatch(updateImage(formData));
  };

  useEffect(() => {
    if (updateImageErrors.length > 0) {
      updateImageErrors.map((error) => toast.error(error.msg));
      dispatch({ type: REMOVE_UPDATE_IMAGE_ERRORS });
    }
  }, [updateImageErrors]);
  useEffect(() => {
    if (redirect) {
      push("/dashboard");
    }
  }, [redirect]);
  return (
    <div className="create__post">
      <Helmet>
        <title>Edit Post - Vital Blog</title>
        <meta name="edit-post" content="edit-post" />
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
          <h1 className="editMyBlogTitle">Change your blog cover photo</h1>
          <form onSubmit={handleUpdateImage}>
            <Col md={12}>
              <div>
                <Form.Group controlId="formFile" className="mb-3 selectGroup">
                  <Form.Label>Featured Image *</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    className="selectGroup-text"
                    onChange={imageHandle}
                  />
                </Form.Group>
              </div>
            </Col>
            <Col md={12}>
              <div className="textInputGroup">
                <div className="imagePreview">
                  {state.imagePreview ? (
                    <img src={state.imagePreview} alt={state.imagePreview} />
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </Col>
            <div className="group">
              <input
                type="submit"
                value="Update Image"
                className="create__post-submitBlogBtn"
              />
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default EditCoverImage;
