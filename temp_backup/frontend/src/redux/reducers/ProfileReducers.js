import {
  GET_PROFILE_ERRORS,
  REMOVE_PROFILE_ERRORS,
} from "../types/ProfileTypes";

const initState = {
  profileErrors: [],
};

export const UpdateName = (state = initState, action) => {
  const { type, payload } = action;
  if (type === GET_PROFILE_ERRORS) {
    return { ...state, profileErrors: payload };
  } else if (type === REMOVE_PROFILE_ERRORS) {
    return { ...state, profileErrors: [] };
  } else {
    return state;
  }
};
