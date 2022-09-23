import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getPostsAPI } from "../../api/posts";
import Post from "../Post";

const PostsList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  const onViewPost = (data) => {
    navigate(`/posts/${data._id}`, { state: { ...data, detailedView: true } });
  };

  const getPosts = () =>
    getPostsAPI()
      .then((res) => setPosts(res.data))
      .catch(() => setError(true));

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {error && <div>Sorry, there was an error</div>}
      {!posts?.length && <h1>There are not posts, please create one</h1>}
      {!error && !!posts?.length && (
        <div className="container px-4 mt-2 text-center">
          <h1>Recent Posts</h1>
          <div className="row gx-5">
            {posts.map((post) => (
              <Post
                key={post._id}
                data={post}
                getPosts={getPosts}
                viewPost={onViewPost}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsList;
