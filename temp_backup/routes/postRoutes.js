const express = require("express");
const postRouter = express.Router();
const postControllers = require("../controllers/postControllers");
const homeControllers = require("../controllers/homeControllers");


postRouter.post("/createNew_post", postControllers.createPost);
postRouter.post("/update", postControllers.updateValidation ,postControllers.updatePost);
postRouter.post("/update-image", postControllers.updateImage);
postRouter.post("/comment", homeControllers.postComment);
postRouter.get("/posts/:id/:page", postControllers.fetchPosts);
postRouter.get("/post/:id",  postControllers.fetchSinglePost);
postRouter.get("/delete-post/:id",  postControllers.deletePost);
postRouter.get("/home/:page",  homeControllers.homeAllPost);
postRouter.get("/detailsPost/:id",  homeControllers.singlePostDetails);


module.exports = postRouter;
