import axios from "axios";

export const getPostsAPI = () =>
  axios
    .get("http://localhost:5000/api/posts")
    .then((res) => res)
    .catch((err) => err);

export const createPostAPI = (data) =>
  axios
    .post("http://localhost:5000/api/posts", data)
    .then((res) => res)
    .catch((err) => err);

export const deletePostAPI = ({ id }) =>
  axios
    .delete(`http://localhost:5000/api/posts/${id}`)
    .then((res) => res)
    .catch((err) => err);

export const updatePostAPI = ({ data }) =>
  axios
    .put(`http://localhost:5000/api/posts/${data._id}`, data)
    .then((res) => res)
    .catch((err) => err);
