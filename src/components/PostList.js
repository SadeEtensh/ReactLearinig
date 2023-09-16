import { useState, useEffect } from "react";
export const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // returns promise
      .then((response) => response.json())
      .then((date) => setPosts(date))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h1>{post.title}</h1>
            </li>
          );
          // <li><p>{post.body}</p></li>
        })}
      </ul>
    </div>
  );
};
