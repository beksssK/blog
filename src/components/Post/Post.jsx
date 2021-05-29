import React, { PureComponent } from "react";
import "./Post.css";

class Post extends PureComponent {
  componentDidMount() {
    console.log("[Post] DidMount");
  }
  componentDidUpdate() {
    console.log("[Post] DidUpdate");
  }
  render() {
    console.log("[Post] render");
    return (
      <article onClick={this.props.clicked} className="Post">
        <h1>{this.props.title}</h1>
        <div className="Info">
          <div className="Author">Name: {this.props.author}</div>
        </div>
      </article>
    );
  }
}

export default Post;