import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { deletePostAPI } from "../../api/posts";
import Tag from "../common/Tag";
import defaultImage from "./../../assets/images.png";
import "./Post.styles.css";

const Post = ({ data, isPreview, getPosts, viewPost }) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const postData = data || state;
  const date = new Date(postData.date).toLocaleDateString("en-US");

  const editPost = () => {
    navigate("/create", { state: { ...data, editing: true } });
  };

  const deletePost = async () => {
    deletePostAPI({ id: data._id })
      .then(() => getPosts())
      .catch(() => {});
  };

  const renderContent = () => {
    return (
      <div
        className={`${
          postData.detailedView
            ? "card-expanded"
            : `card m-3 p-1 ${isPreview ? "card-preview" : ""}`
        }`}
      >
        <div
          style={{ display: "flex", justifyContent: "start", width: "100%" }}
        >
          {postData.detailedView && (
            <Link to="/" className="btn btn-secondary">
              return
            </Link>
          )}
        </div>
        <div className="clickeable-area" onClick={() => viewPost(data)}>
          <img
            src={postData.image || defaultImage}
            className={`${
              postData.detailedView ? "expanded-image" : "card-img-top"
            }`}
            alt={postData.title || "Image"}
          />
          <div
            className="card-body"
            style={{
              height:
                postData.editing || postData.detailedView ? "100%" : "200px",
            }}
          >
            <div className="card-extrainfo">
              <Tag tag={postData.tag} />
              <span>{date}</span>
            </div>
            <h5 className="card-title">{postData.title || "Title"}</h5>
            {(postData.detailedView || isPreview) && (
              <p className="card-text">{postData.text || "Text"}</p>
            )}
          </div>
        </div>

        {!isPreview && !postData.detailedView && (
          <div className="buttons-container">
            <button
              type="button"
              className="btn btn-light btn-sm m-1"
              onClick={editPost}
            >
              Edit
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm m-1"
              onClick={deletePost}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  };

  return renderContent();
};

export default Post;
