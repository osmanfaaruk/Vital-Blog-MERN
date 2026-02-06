const formidable = require("formidable");
const { v4: uuidv4 } = require("uuid");
const postSchema = require("../models/Post");
const { body, validationResult } = require("express-validator");
const fs = require("fs");
const { htmlToText } = require("html-to-text");

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, async (error, fields, files) => {
    const { title, description, category, body, slug, id, name } = fields;
    const errors = [];
    if (title === "") {
      errors.push({ msg: "Topic Title is required" });
    }
    if (body === "") {
      errors.push({ msg: "Topic Content is required" });
    }
    if (description === "") {
      errors.push({ msg: "Description is required" });
    }
    if (category === "") {
      errors.push({ msg: "Topic Category is required" });
    }
    if (slug === "") {
      errors.push({ msg: "Slug Category is required" });
    }
    if (Object.keys(files).length === 0) {
      errors.push({ msg: "Cover Photo Is required" });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        errors.push({ msg: `${extension} is not a valid` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }
    const checkSlug = await postSchema.findOne({ slug });
    if (checkSlug) {
      errors.push({ msg: "Please choose a unique URL" });
    }
    if (errors.length !== 0) {
      return res.status(400).json({ errors, files });
    } else {
      const imagesDir = path.join(__dirname, '..', 'frontend', 'build', 'images');
      
      // Ensure directory exists
      if (!fs.existsSync(imagesDir)) {
        fs.mkdirSync(imagesDir, { recursive: true });
      }

      const newPath = path.join(imagesDir, files.image.name);
      
      fs.copyFile(files.image.path, newPath, async (error) => {
        if (!error) {
          try {
            const response = await postSchema.create({
              title,
              body,
              image: files.image.name,
              description,
              category,
              slug,
              userName: name,
              userId: id,
            });
            return res.status(200).json({
              msg: "Your Post has been submitted successfully",
              response,
            });
          } catch (error) {
            return res.status(500).json({ errors: error, msg: error.message });
          }
        } else {
          return res.status(500).json({ errors: [{msg: "Failed to upload image. Please try again."}], detail: error.message });
        }
      });
    }
  });
};



// fetch post
const fetchPosts = async (req, res) => {
  const id = req.params.id;
  const page = req.params.page;
  const perPage = 5;
  const skip = (page - 1) * perPage;

  try {
    const count = await postSchema.find({ userId: id }).countDocuments();
    const response = await postSchema
      .find({ userId: id })
      .skip(skip)
      .limit(perPage)
      .sort({ updatedAt: -1 });
    return res.status(200).json({ postData: response, count, perPage });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};




// fetch single post
const fetchSinglePost = async (req, res) => {
  const id = req.params.id;
  try {
    const singlePost = await postSchema.findOne({ _id: id });
    return res.status(200).json({ singlePost });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

// updating post validation
const updateValidation = [
  body("title")
    .notEmpty()
    .trim()
    .withMessage("Please give a title to your content"),
  body("body")
    .notEmpty()
    .trim()
    .custom((value) => {
      let bodyValue = value.replace(/\n/g, "");
      if (htmlToText(bodyValue).trim().length === 0) {
        return false;
      } else {
        return true;
      }
    })
    .withMessage("Please describe your content"),
  body("description")
    .notEmpty()
    .trim()
    .withMessage("Please give a short description to your content"),
];

// updating post
const updatePost = async (req, res) => {
  const { title, body, description, id } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  } else {
    try {
      const response = await postSchema.findByIdAndUpdate(id, {
        title,
        body,
        description,
      });
      return res.status(200).json({ msg: "Your content has been updated" });
    } catch (error) {
      return res.status(500).json({ errors: error, msg: error.message });
    }
  }
};

// updating image
const updateImage = async (req, res) => {
  const imageForm = formidable({ multiples: true });
  imageForm.parse(req, (errors, fields, files) => {
    const { id } = fields;
    const updateImageErrors = [];
    if (Object.keys(files).length === 0) {
      updateImageErrors.push({
        msg: "Please choose a a cover photo for your content",
      });
    } else {
      const { type } = files.image;
      const split = type.split("/");
      const extension = split[1].toLowerCase();
      if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
        updateImageErrors.push({ msg: `${extension} is not a valid Image` });
      } else {
        files.image.name = uuidv4() + "." + extension;
      }
    }
    if (updateImageErrors.length !== 0) {
      return res.status(400).json({ errors: updateImageErrors });
    } else {
      const newPath =
        __dirname + `/../frontend/build/images/${files.image.name}`;
      fs.copyFile(files.image.path, newPath, async (error) => {
        try {
          const response = await postSchema.findByIdAndUpdate(id, {
            image: files.image.name,
          });
          return res
            .status(200)
            .json({ msg: "Your cover photo has been updated successfully" });
        } catch (error) {
          return res.status(500).json({ errors: error, msg: error.message });
        }
      });
    }
  });
};

// deleting post
const deletePost = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await postSchema.findByIdAndRemove(id);
    return res
      .status(200)
      .json({ msg: "Your post has been deleted successfully" });
  } catch (error) {
    return res.status(500).json({ errors: error, msg: error.message });
  }
};

module.exports = {
  createPost,
  fetchPosts,
  fetchSinglePost,
  updatePost,
  updateValidation,
  updateImage,
  deletePost,
};
