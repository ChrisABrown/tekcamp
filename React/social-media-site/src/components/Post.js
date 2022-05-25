import Comment from "./Comments";

const Post = (props) => {
  <div>
    <img class="ui fluid rounded image" src="" alt="posted content" />
    <Comment>{props.children}</Comment>
  </div>;
};

export default Post;

// setInterval(() => {
//   this.setState({ time: new Date().toLocaleTimeString() });
// }, 1000);
