import React from "react";
import Navbar from "./components/Navbar";
import Posts from "./components/Post";
import { useState } from "react";

function App() {
  const [post, setPost] = useState([]);
  return (
    <>
      <Navbar />
      <Posts />
    </>
  );
}

export default App;

// export default function App() {
//   const [post, setPost] = useState([]);
//   const [loaded, isLoaded] =
//   useEffect(() => {
//     axios
//       .get("https://dummyapi.io/data/v1/post?page=1&limit=15", {
//         headers: {
//           "app-id": "628ee0fef2484a975fe0d2e8",
//         },
//       })
//       .then((response) => {
//         setPost(response.data);
//       });
//   }, []);

//   if (!post) return null;

//   return (
//     <div className="ui-grid">
//       <Posts>
//         title ={post.title}
//         src= {post[0].id}
//       </Posts>
//     </div>
//   );
// }
