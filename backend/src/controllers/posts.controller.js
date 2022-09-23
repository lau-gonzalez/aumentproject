const postsController = {};

const Post = require("../models/Post");

postsController.getPosts = async (req, res) => {
  const posts = await Post.find();

  res.json(posts);
};

postsController.createPost = async (req, res) => {
  const newPost = new Post(req.body);

  await newPost.save();
  res.json({ message: "post saved" });
};

postsController.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);

  res.json({ message: "Post deleted" });
};

postsController.updatePost = async (req, res) => {
  const { title, text, image, tag } = req.body;
  console.log(req.params.id);
  await Post.findByIdAndUpdate(req.params.id, {
    title,
    text,
    image,
    tag,
  });

  res.json({ message: "Post updated" });
};

postsController.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  res.json(post);
};

module.exports = postsController;
