import {
  POST_ERRORS,
  REMOVE_ERRORS,
  SET_LOADER,
  CLOSE_LOADER,
  REDIRECT_TRUE,
  REDIRECT_FALSE,
  SET_MESSAGE,
  REMOVE_MESSAGE,
  SET_POSTS,
  SET_POST,
  POST_REQUEST,
  POST_RESET,
  SET_UPDATE_ERRORS,
  REMOVE_UPDATE_ERRORS,
  UPDATE_IMAGE_ERRORS,
  REMOVE_UPDATE_IMAGE_ERRORS,
  SET_POST_DETAILS,
  COMMENTS,
} from "../types/PostTypes";

const initState = {
  loading: false,
  createErrors: [],
  redirect: false,
  message: "",
  posts: [],
  perPage: 0,
  count: 0,
  post: {},
  postStatus: false,
  updateErrors: [],
  updateImageErrors: [],
  postDetails: {},
  comments: [],
};

// Posting new blog
export const PostReducer = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (type === POST_ERRORS) {
    return { ...state, createErrors: payload };
  } else if (type === REDIRECT_TRUE) {
    return { ...state, redirect: true };
  } else if (type === REDIRECT_FALSE) {
    return { ...state, redirect: false };
  } else if (type === SET_MESSAGE) {
    return { ...state, message: payload };
  } else if (type === REMOVE_MESSAGE) {
    return { ...state, message: "" };
  } else if (type === REMOVE_ERRORS) {
    return { ...state, createErrors: [] };
  } else if (type === SET_POST_DETAILS) {
    return { ...state, postDetails: payload };
  } else if (type === COMMENTS) {
    return { ...state, comments: payload };
  } else {
    return state;
  }
};

// fetching posts for user dashboard
export const FetchPosts = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_POSTS) {
    return {
      ...state,
      posts: payload.postData,
      count: payload.count,
      perPage: payload.perPage,
    };
  } else {
    return state;
  }
};

// fetching posts for edit
export const FetchSinglePost = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_POST) {
    return { ...state, post: payload };
  } else if (type === POST_REQUEST) {
    return { ...state, postStatus: true };
  } else if (type === POST_RESET) {
    return { ...state, postStatus: false };
  } else {
    return state;
  }
};

// updating post
export const UpdatePost = (state = initState, action) => {
  const { type, payload } = action;
  if (type === SET_UPDATE_ERRORS) {
    return { ...state, updateErrors: payload };
  } else if (type === REMOVE_UPDATE_ERRORS) {
    return { ...state, updateErrors: [] };
  } else {
    return state;
  }
};

// update image
export const UpdateImage = (state = initState, action) => {
  const { type, payload } = action;
  if (type === UPDATE_IMAGE_ERRORS) {
    return { ...state, updateImageErrors: payload };
  } else if (type === REMOVE_UPDATE_IMAGE_ERRORS) {
    return { ...state, updateImageErrors: [] };
  } else {
    return state;
  }
};
