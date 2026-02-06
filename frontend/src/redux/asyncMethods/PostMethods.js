import axios from "../../config/axiosConfig";
import {
  POST_ERRORS,
  REMOVE_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  SET_MESSAGE,
  SET_POSTS,
  SET_POST,
  POST_REQUEST,
  SET_UPDATE_ERRORS,
  UPDATE_IMAGE_ERRORS,
} from "../types/PostTypes";

// const token = localStorage.getItem("myToken");

// Posting content
export const createAction = (formData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post("/createNew_post", formData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REMOVE_ERRORS });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: data.msg });
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_ERRORS, payload: errors });
    }
  };
};

// fetching post for user dashboard
export const fetchPosts = (id, page) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    dispatch({ type: SET_LOADER });
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const {
        data: { postData, count, perPage },
      } = await axios.get(`/posts/${id}/${page}`, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_POSTS, payload: { postData, count, perPage } });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
    }
  };
};

// fetching singlePost for edit
export const fetchSinglePost = (id) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { singlePost },
      } = await axios.get(`/post/${id}`, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_POST, payload: singlePost });
      dispatch({ type: POST_REQUEST });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error.message);
    }
  };
};

// updating Post
export const updatePost = (editedData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/update", editedData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: data.msg });
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_UPDATE_ERRORS, payload: errors });
    }
  };
};

// update image
export const updateImage = (updateData) => {
  return async (dispatch, getState) => {
    const {
      AuthReducer: { token },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { msg },
      } = await axios.post("/update-image", updateData, config);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: REDIRECT_TRUE });
      dispatch({ type: SET_MESSAGE, payload: msg });
    } catch (error) {
      const {
        response: {
          data: { errors },
        },
      } = error;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: UPDATE_IMAGE_ERRORS, payload: errors });
    }
  };
};




