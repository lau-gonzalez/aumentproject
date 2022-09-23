const { Router } = require("express");
const {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  getPost,
} = require("../controllers/posts.controller");
const router = Router();

router.route("/").get(getPosts).post(createPost);

router.route("/:id").delete(deletePost).put(updatePost).get(getPost);

module.exports = router;
