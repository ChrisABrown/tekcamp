import React from "react";
import Comment from "./components/Comments";
import Post from "./components/Post";
import DummyAPI from "./api/DummyAPI";
import "./PostView.css";

class PostView extends React.Component {
  state = { text: [] };

  componentDidMount = async (text) => {
    const comment = await DummyAPI.get("/comment?page=1&limit=4");

    this.setState({ text: comment.data.data });
    this.state.text = comment;
    // const pic = await axios.get(
    //   "https://dummyapi.io/data/v1/?page=1&limit=5",
    //   {
    //     headers: {
    //       "app-id": "628ee0fef2484a975fe0d2e8",
    //     },
    //   }
    // );
  };
  render() {
    return (
      <div className="ui-background">
        <div className="ui-container-comments"></div>

        <Comment
          author="Billy"
          timeAgo="2 hours ago"
          // imgSrc={faker.image.avatar()}
          text=""
        />

        <Comment
          author="Mike"
          timeAgo="2 days ago"
          // imgSrc={faker.image.avatar()}
          text="{}"
        />

        <Comment
          author="Rebecca"
          timeAgo="4 hours ago"
          // imgSrc={faker.image.avatar()}
          text="I would have never thought of that"
        />
      </div>
    );
  }
}

export default PostView;

// BrowserRouter/HashRouter two Router components
// wrap components in a Route component to show one at a time
