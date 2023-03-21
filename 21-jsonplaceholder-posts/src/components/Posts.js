import { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        setPosts(posts);
      });
  }, []);

  return (
    <div>
      <Post />
      <Post />
    </div>
  );
}

export default Posts;
