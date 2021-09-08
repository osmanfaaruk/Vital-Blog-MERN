import axios from "axios";
import {
  SET_TOKEN,
  SET_LOADER,
  REGISTER_ERRORS,
  CLOSE_LOADER,
  LOGIN_ERRORS,
} from "../types/AuthTypes";

export const postRegister = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: SET_LOADER });
    try {
      const { data } = await axios.post("/register", state, config); // posting register data to server
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.jwtToken);
      dispatch({ type: SET_TOKEN, payload: data.jwtToken });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({
        type: REGISTER_ERRORS,
        payload: error.response.data.errors,
      }); //errors
    }
  };
};

// login AuthMethods

export const postLogin = (state) => {
  return async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      dispatch({ type: SET_LOADER });
      const { data } = await axios.post("/login", state, config); // posting login data to backend and database
      dispatch({ type: CLOSE_LOADER });
      localStorage.setItem("myToken", data.jwtToken);
      dispatch({ type: SET_TOKEN, payload: data.jwtToken });
    } catch (error) {
      dispatch({ type: CLOSE_LOADER });
      dispatch({type: LOGIN_ERRORS, payload: error.response.data.errors,
      }); // getting errors
    }
  };
};
