import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams, useHistory } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchSinglePost,
  updatePost,
} from "../../redux/asyncMethods/PostMethods";
import { POST_RESET, REMOVE_UPDATE_ERRORS } from "../../redux/types/PostTypes";
import toast, { Toaster } from "react-hot-toast";
import PostEditPageProgress from "../../skelatons/PostEditPageProgress";

const EditPost = () => {
  const { id } = useParams();
  const { push } = useHistory();
  // Body post content React quill
  // const [value, setValue] = useState("");
  const [editState, setEditState] = useState({
    title: "",
    description: "",
    body: "",
  });

  const dispatch = useDispatch();
  const { loading, redirect } = useSelector((state) => state.PostReducer);
  const { post, postStatus } = useSelector((state) => state.FetchSinglePost);
  const { updateErrors } = useSelector((state) => state.UpdatePost);
  useEffect(() => {
    if (postStatus) {
      setEditState({
        title: post.title,
        description: post.description,
        body: post.body,
      });
      dispatch({ type: POST_RESET });
    } else {
      dispatch(fetchSinglePost(id));
    }
  }, [post]);

  const updateEditedPost = (event) => {
    event.preventDefault();
    dispatch(
      updatePost({
        title: editState.title,
        body: editState.body,
        description: editState.description,
        id: post._id,
      })
    );
  };

  useEffect(() => {
    if (updateErrors.length > 0) {
      updateErrors.map((error) => toast.error(error.msg));
      dispatch({ type: REMOVE_UPDATE_ERRORS });
    }
  }, [updateErrors]);
  useEffect(() => {
    if (redirect) {
      push("/dashboard");
    }
  }, [redirect]);

  return !loading ? (
    <div>
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
      <div className="create__post">
        <Container>
          <Row>
            <h1 className="editMyBlogTitle">Edit your blog</h1>

            <Col md={12}>
              <form onSubmit={updateEditedPost}>
                <div className="create__post-card">
                  <div className="create__post-group">
                    <h2>Post Information</h2>
                    <div className="textInputGroup">
                      <label htmlFor="title">Topic Title*</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="textInputGroup__control"
                        placeholder="Blog Title"
                        value={editState.title}
                        onChange={(e) =>
                          setEditState({ ...editState, title: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="textInputGroup">
                    <label htmlFor="body">
                      Describe your content in detail...
                    </label>
                    <textarea
                      name="body"
                      rows="5"
                      id=""
                      value={editState.body}
                      onChange={(e) =>
                        setEditState({
                          ...editState,
                          body: e.target.value,
                        })
                      }
                      onKeyUp={(e) =>
                        setEditState({
                          ...editState,
                          body: e.target.value,
                        })
                      }
                      className="textInputGroup__control"
                      placeholder="Lorem Ispum..."
                    ></textarea>
                    <p className="description-p">
                      {" "}
                      {editState.body ? editState.body.length : 0}{" "}
                    </p>
                  </div>

                  <div>
                    <Col md={12}>
                      <div className="textInputGroup">
                        <label htmlFor="description">Meta description</label>
                        <textarea
                          name="description"
                          id=""
                          cols="30"
                          rows="3"
                          className="textInputGroup__control"
                          placeholder="meta description...."
                          maxLength="200"
                          defaultValue={editState.description}
                          onChange={(e) =>
                            setEditState({
                              ...editState,
                              description: e.target.value,
                            })
                          }
                          onKeyUp={(e) =>
                            setEditState({
                              ...editState,
                              description: e.target.value,
                            })
                          }
                        ></textarea>
                        <p className="description-p">
                          {" "}
                          {editState.description
                            ? editState.description.length
                            : 0}{" "}
                        </p>
                      </div>
                    </Col>
                    <div className="group">
                      <input
                        type="submit"
                        value="Update Post"
                        className="create__post-submitBlogBtn"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  ) : (
    <PostEditPageProgress />
  );
};

export default EditPost;
