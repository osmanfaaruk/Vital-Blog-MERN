import axios from "../../config/axiosConfig";
import {
  POST_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  SET_POSTS,
  SET_POST_DETAILS,
  COMMENTS
} from "../types/PostTypes";

export const allHomePosts = (page) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { postData, count, perPage },
      } = await axios.get(`/home/${page}`);
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_POSTS, payload: { postData, count, perPage } });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error);
    }
  };
};

export const singlePostDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: SET_LOADER });
    try {
      const {
        data: { postWithDetails, comments, },
      } = await axios.get(`/detailsPost/${id}`);
      
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: SET_POST_DETAILS, payload: postWithDetails });
      dispatch({ type: COMMENTS, payload: comments });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      console.log(error);
    }
  };
};

// comment method
export const postComment = (commentData) => {
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
      const { data } = await axios.post("/comment", commentData, config);
      dispatch({ type: CLOSE_LOADER });
      console.log(data)
    } catch (error) {
      const { errors } = error.response.data;
      dispatch({ type: CLOSE_LOADER });
      dispatch({ type: POST_ERRORS, payload: errors });
    }
  };
};
