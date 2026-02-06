import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import AuthReducer from "./reducers/AuthReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  PostReducer,
  FetchPosts,
  FetchSinglePost,
  UpdatePost,
  UpdateImage,
} from "./reducers/PostReducer";
import { UpdateName } from "./reducers/ProfileReducers";

const rootReducer = combineReducers({
  AuthReducer,
  PostReducer,
  FetchPosts,
  FetchSinglePost,
  UpdatePost,
  UpdateImage,
  UpdateName,
});

const middlewares = [thunkMiddleware];
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
