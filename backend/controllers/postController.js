const mongoose = require("mongoose");
const Post = require("../models/post");

const createPost = async (req, res) => {
  try {
    const { poster, title, content } = req.body;
    console.log(poster);

    // if (!(title && content)) {
    //   throw new Error("All input required");
    // }

    const post = await Post.create({
      title,
      content,
      poster,
    });

    res.json(post);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
module.exports = {
  createPost,
};
