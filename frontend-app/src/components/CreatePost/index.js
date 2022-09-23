import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createPostAPI, updatePostAPI } from "../../api/posts";
import Post from "../Post";

const CreatePost = () => {
  const navigate = useNavigate();
  const { state: postData } = useLocation();
  const [data, setData] = useState(postData || {});

  const handleOnChange = (field, e) => {
    setData({ ...data, [field]: e.target.value });
  };

  const handleSave = () => {
    if (postData?.editing) {
      return updatePostAPI({ data })
        .then(() => navigate("/"))
        .catch(() => {});
    }

    createPostAPI(data)
      .then(() => navigate("/"))
      .catch(() => {});
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="mt-3">
          {postData?.editing
            ? "Fill in the fields you want to edit"
            : "Complete the fields"}
        </h2>
        <div className="col-4">
          <div className="input-group mb-3 mt-3">
            <span className="input-group-text" id="basic-addon1">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={(e) => handleOnChange("title", e)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Image URL
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="https://example.com/image1"
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={(e) => handleOnChange("image", e)}
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Tag</span>
            <input
              type="text"
              className="form-control"
              aria-label="tag"
              onChange={(e) => handleOnChange("tag", e)}
            />
          </div>

          <div className="input-group">
            <span className="input-group-text">Text</span>
            <textarea
              className="form-control"
              aria-label="With textarea"
              onChange={(e) => handleOnChange("text", e)}
            ></textarea>
          </div>
          <button
            type="button"
            className="btn btn-secondary mt-3"
            onClick={handleSave}
          >
            {postData?.editing ? "Save" : "Create"}
          </button>
        </div>
        <div className="col-8">
          <Post data={data} isPreview />
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
