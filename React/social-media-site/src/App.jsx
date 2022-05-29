import React from "react";
import { CssBaseline, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/PostFeed/PostFeed";
import Comments from "./components/CommentDetail/CommentDetails";

function App(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  //   posts.forEach((posts) => {
  // for (let text in posts) {
  //   console.log(`${text}: ${posts[text]}`);

  const fetchPosts = async () => {
    const posts = await fetch(
      "https://dummyapi.io/data/v1/post?page=1&limit=16",
      {
        method: "GET",
        headers: {
          "app-id": "628ee0fef2484a975fe0d2e8",
        },
      }
    )
      .then((posts) => posts.json())
      .then((posts) => {
        setPosts(posts.data);

        const images = posts.data.map(({ image }) => image);
      });
  };
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={8}>
          <h1>Welcome</h1>
          <Posts />
          <Comments />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

{
  /* <li key={name}>users[name]</li>; */
}
// const deletePost = (id) => {
//     if (window.confirm("Are  you sure you want to delete?")) {
//       setPosts(posts.filter((each) => each.id !== id));
//     }
//   };
// posts = { posts }; sends posts to PostFeed
// export default function App() {
//   const [post, setPost] = useState([]);
//   const [loaded, isLoaded] =
//   useEffect(() => {
//

//   return (
//     <div className="ui-grid">
//       <Posts>
//         title ={post.title}
//         src= {post[0].id}
//       </Posts>
//     </div>
//   );
// }
