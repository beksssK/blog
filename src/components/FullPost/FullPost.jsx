import React from "react";
import "./FullPost.css";
import axios from "axios";

class FullPost extends React.Component {
  state = {
    loadedPost: null,
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("update");
    if (!this.props.id) {
      return;
    }
    
    if (this.state.loadedPost && this.state.loadedPost.id === this.props.id) {
      return;
    }
    axios.get("/posts/" + this.props.id).then(response => {
      this.setState({loadedPost: response.data});
    });
    const data = new FormData();
    data.append("title", "some title");
    data.append("text", "some funny text");
    data.append("author", "Beks");
    console.log(data);
    
  }
  
  render() {
    return this.state.loadedPost && (
      <div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
        <div className="Edit">
          <button className="Delete" >Delete</button>
        </div>
      </div>
    )
  }
}

export default FullPost;