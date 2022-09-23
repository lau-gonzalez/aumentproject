import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostsList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Menu from "./components/Menu";
import Post from "./components/Post";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" exact element={<PostsList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}

export default App;
