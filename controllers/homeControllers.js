const postSchema = require("../models/Post");
const commentSchema = require("../models/Comment");

// for all posts in home page
const homeAllPost = async (req, res) => {
  const page = req.params.page;
  const perPage = 30;
  const skip = (page - 1) * perPage;
  try {
    const count = await postSchema.find({}).countDocuments();
    const posts = await postSchema
      .find({})
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ postData: posts, count, perPage });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

// single page with details

const singlePostDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const postWithDetails = await postSchema.findOne({ slug: id });
    const comments = await commentSchema
      .find({ postId: postWithDetails._id })
      .sort({ updatedAt: -1 }); // for showing comment
    return res.status(200).json({ postWithDetails, comments });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

const postComment = async (req, res) => {
  const { id, comment, userName } = req.body;
  try {
    const response = await commentSchema.create({
      postId: id,
      comment: comment,
      userName: userName,
    });
    return res.status(200).json({
      msg: "Your comment has been submitted successfully",
      response,
    });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports = {
  homeAllPost,
  singlePostDetails,
  postComment,
};
