const mongoose = require("mongoose");
const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { title, content, userId } = req.body;

    if (!(title && content)) {
      throw new Error("All input required");
    }

    const post = await Post.create({
      title,
      content,
      poster: userId,
    });

    res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const getPosts = async (req, res) => {
  try {
    let sortBy = "-createdAt";

    let posts = await Post.find()
      .populate("poster", "-password")
      .sort(sortBy)
      .lean();

    return res.json(posts);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createPost,
  getPosts,
};
