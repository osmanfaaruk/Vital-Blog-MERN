import React, { useState, useEffect } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
// import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import swal from "sweetalert";
import { createAction } from "../../redux/asyncMethods/PostMethods";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useHistory } from "react-router-dom";
import PostEditPageProgress from "../../skelatons/PostEditPageProgress";

const CreatePost = (props) => {
  const history = useHistory();
  const { createErrors, redirect, loading } = useSelector(
    (state) => state.PostReducer
  );
  const dispatch = useDispatch();
  const {
    user: { _id, name },
  } = useSelector((state) => state.AuthReducer);
  const [inputState, setInputState] = useState({
    title: "",
    description: "",
    image: "",
    body: "",
  });
  const handleDescription = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const handleBody = (event) => {
    setInputState({
      ...inputState,
      [event.target.name]: event.target.value,
    });
  };
  const [slug, setSlug] = useState("");
  const [updateSlugBtn, setUpdateSlugBtn] = useState(false);
  const handleInputs = (event) => {
    setInputState({
      // title slugUrl
      ...inputState,
      [event.target.name]: event.target.value,
    });
    const createSlug = event.target.value.trim().split(" ").join("-");
    setSlug(createSlug);
  };
  const chnageUrl = (event) => {
    setUpdateSlugBtn(true);
    setSlug(event.target.value);
  };
  const updateUrl = (event) => {
    event.preventDefault();
    setSlug(slug.trim().split(" ").join("-"));
    swal(" ", "URL Updated", "warning");
  };

  const [currentImage, setCurrentImage] = useState("Select an image");
  const [imagePreview, setImagePreview] = useState("");
  const imageHandle = (event) => {
    // select an image
    if (event.target.files.length !== 0) {
      setCurrentImage(event.target.files[0].name);
      setInputState({
        ...inputState,
        [event.target.name]: event.target.files[0],
      });
      const imgPreview = new FileReader(); // preview image
      imgPreview.onloadend = () => {
        setImagePreview(imgPreview.result);
      };
      imgPreview.readAsDataURL(event.target.files[0]);
    }
  };

  const [category, setCategory] = useState([]);
  const selectedCategory = (event) => {
    // setCategory({category: event.target.value});
    // console.log(category)
    // select category
    setCategory({
      ...(category[event.target.name] = event.target.value),
    });
  };

  // Body post content React quill
  // const [value, setValue] = useState("");

  const createNewPost = (event) => {
    event.preventDefault();
    const { title, description, image, body } = inputState;
    const postData = new FormData();
    postData.append("title", title);
    postData.append("body", body);
    postData.append("image", image);
    postData.append("description", description);
    postData.append("category", category);
    postData.append("slug", slug);
    postData.append("name", name);
    postData.append("id", _id);
    dispatch(createAction(postData));
  };
  
  // showing error message
  useEffect(() => {
    if (redirect) {
      history.push("/dashboard");
    }
    if (createErrors.length !== 0) {
      createErrors.map((err) => toast.error(err.msg));
    }
  }, [createErrors, redirect]);
  return (
    <>
      <Helmet>
        <title>New Post - Vital Blog</title>
        <meta name="description" content="Create New Post" />
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
      {!loading ? (
        <div className="create__post">
          <Container>
            <Row>
              <Col md={12}>
                <form action="" onSubmit={createNewPost}>
                  <h1>Submit your Post</h1>
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
                          onChange={handleInputs}
                          value={inputState.title}
                        />
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col md={4}>
                          <div>
                            <Form.Group
                              controlId="formFile"
                              className="mb-3 selectGroup"
                            >
                              <Form.Label>Featured Image *</Form.Label>
                              <Form.Control
                                type="file"
                                name="image"
                                onChange={imageHandle}
                                className="selectGroup-text"
                              />
                            </Form.Group>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="selectGroup">
                            <label htmlFor="title">Language</label>

                            <Form.Select
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                            >
                              <option value="1">English</option>
                              <option value="2">Bangla</option>
                            </Form.Select>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="selectGroup">
                            <label htmlFor="title">Content type</label>

                            <Form.Select
                              aria-label="Floating label select example"
                              className="selectGroup-text"
                              value={category.name}
                              onChange={selectedCategory}
                            >
                              <option>Choose category</option>
                              <option name="news">News</option>
                              <option name="business">Business</option>
                              <option name="magazine">Magazine</option>
                              <option name="sport">Sport</option>
                              <option name="arts">Arts</option>
                              <option name="culture">Culture</option>
                              <option name="politics">Politics</option>
                              <option name="style">Style</option>
                              <option name="travel">Travel</option>
                            </Form.Select>
                          </div>
                        </Col>
                      </Row>
                    </div>

                    {/* <ReactQuill
                        theme="snow"
                        value={value}
                        onChange={setValue}
                        placeholder="Lorem Ispum..."
                      /> */}
                    <div className="textInputGroup">
                      <label htmlFor="body">
                        Describe your content in detail...
                      </label>
                      <textarea
                        name="body"
                        rows="5"
                        id=""
                        value={inputState.body}
                        onChange={handleBody}
                        className="textInputGroup__control"
                        placeholder="Lorem Ispum..."
                      ></textarea>
                      <p className="description-p">
                        {" "}
                        {inputState.body ? inputState.body.length : 0}{" "}
                      </p>
                    </div>

                    <div>
                      <Row>
                        <Col md={6}>
                          <div className="textInputGroup">
                            <label htmlFor="description">
                              Meta description
                            </label>
                            <textarea
                              name="description"
                              id=""
                              cols="30"
                              rows="5"
                              defaultValue={inputState.description}
                              onChange={handleDescription}
                              className="textInputGroup__control"
                              placeholder="meta description...."
                              maxLength="200"
                            ></textarea>

                            <p className="description-p">
                              {" "}
                              {inputState.description
                                ? inputState.description.length
                                : 0}{" "}
                            </p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <Row>
                            <Col md={11}>
                              <div className="textInputGroup">
                                <label htmlFor="title">Blog url</label>
                                <input
                                  type="text"
                                  name="title"
                                  id="title"
                                  className="textInputGroup__control"
                                  placeholder="Blog url"
                                  value={slug}
                                  onChange={chnageUrl}
                                />
                              </div>
                            </Col>
                            <Col md={1}>
                              <div className="create__post-blogUrlBtn ">
                                {updateSlugBtn ? (
                                  <button
                                    className="btn btn-warning"
                                    onClick={updateUrl}
                                  >
                                    Update
                                  </button>
                                ) : (
                                  ""
                                )}
                              </div>
                            </Col>
                          </Row>
                          <div className="textInputGroup">
                            <div className="imagePreview">
                              {imagePreview ? (
                                <img
                                  src={imagePreview}
                                  alt={imagePreview.name}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <div className="group">
                        <input
                          type="submit"
                          value="Submit Post"
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
      ) : (
        <PostEditPageProgress />
      )}
    </>
  );
};

export default CreatePost;
