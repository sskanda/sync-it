const User = require("../models/User");
const Post = require("../models/post");
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const normalizedEmail = email.toLowerCase();

    const existingUser = await User.findOne({
      $or: [{ email: normalizedEmail }, { username }],
    });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const user = await User.create({
      username,
      email: normalizedEmail,
      password,
    });

    return res.json(user);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const normalizedEmail = email.toLowerCase();

    const user = await User.findOne({ email: normalizedEmail });

    if (!user) {
      throw new Error("Email or password incorrect");
    }

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username }).select("-password");

    if (!user) {
      throw new Error("User does not exist");
    }

    //console.log(user);
    const posts = await Post.find({ poster: user._id })
      .populate("poster")
      .sort("-createdAt");

    console.log("dafaq" + posts);

    const data = {
      user,
      posts: {
        count: posts.length,

        data: posts,
      },
    };

    return res.status(200).json(data);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
  getUser,
};
