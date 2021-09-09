import jwt_decode from "jwt-decode";
import {
  SET_TOKEN,
  SET_LOADER,
  REGISTER_ERRORS,
  CLOSE_LOADER,
  LOGOUT,
  LOGIN_ERRORS,
} from "../types/AuthTypes";

const initState = {
  loading: false,
  loginErrors: [],
  registerErrors: [],
  token: "",
  user: "",
};

const verifyToken = (jwtToken) => {
  const decodedToken = jwt_decode(jwtToken);
  const expiresIn = new Date(decodedToken.expires * 1000);
  if (new Date() > expiresIn) {
    localStorage.removeItem("myToken");
  } else {
    return decodedToken;
  }
};
const jwtToken = localStorage.getItem("myToken");
if (jwtToken) {
  const decoded = verifyToken(jwtToken);
  initState.token = jwtToken;
  const { user } = decoded;
  initState.user = user;
}

const AuthReducer = (state = initState, action) => {
  if (action.type === SET_LOADER) {
    return { ...state, loading: true };
  } else if (action.type === CLOSE_LOADER) {
    return { ...state, loading: false };
  } else if (action.type === REGISTER_ERRORS) {
    return { ...state, registerErrors: action.payload }; // getting errors
  } else if (action.type === SET_TOKEN) {
    const decoded = verifyToken(action.payload);
    const { user } = decoded;
    return {
      ...state,
      token: action.payload,
      user: user,
      loginErrors: [],
      registerErrors: [],
    };
  } else if (action.type === LOGOUT) {
    return { ...state, token: "", user: "" };
  } else if (action.type === LOGIN_ERRORS) {
    return { ...state, loginErrors: action.payload };
  } else {
    return state;
  }
};

export default AuthReducer;
