import React from "react";
import "./Tag.styles.css";

const Tag = ({ tag }) => {
  return (
    <div className="tag-container">
      <span>{tag || "TAG"}</span>
    </div>
  );
};

export default Tag;
