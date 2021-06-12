import React, { Component } from "react";
import "./Blog.css";
import { NavLink } from "react-router-dom";
import Post from "../../components/Post/Post";
import axios from "axios";
import { parseISO } from "date-fns"

class Blog extends Component {
  state = {
    posts: []
  }
  getPosts = async () => {
    const posts = await axios.get("https://burger-4b309-default-rtdb.firebaseio.com/posts.json");
    const newPosts = Object.keys(posts.data).map(post => {
      return ({ ...posts.data[post], id: post });
    })
    this.setState({posts: newPosts})
  }
  componentDidMount() {
    this.getPosts().then();
  }
  
  render() {
    return (
      <div className="container">
        <header>
          <h1>My Blog</h1>
          <ul className="links">
            <li>
              <NavLink className="link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="link" to="/posts/add">Add</NavLink>
            </li>
          </ul>
        </header>
        <div className="posts">
          {this.state.posts.map(post => {
            return <Post key={post.id} id={post.id} date={post.date} title={post.title} />
          })}
        </div>
      </div>
    );
  }
}

export default Blog;