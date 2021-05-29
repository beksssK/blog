import React, { Component } from "react";
import Post from "../../components/Post/Post";
import axios from "axios";
import "./Blog.css";
import FullPost from "../../components/FullPost/FullPost";

export const BASE_URL = "https://jsonplaceholder.typicode.com/"

class Blog extends Component {
  constructor(props) {
    super(props);
    console.log("[Blog] constructor");
    console.log("[Blog] State exists: ", this.state.posts.length > 0);
  }
  state = {
    posts: [],
    postsFormShown: false,
    postId: null,
  }
  
  componentDidMount() {
    console.log("[Blog] DidMount");
    const POSTS_URL = "posts?_limit=6";
    const USER_URL = "users/";
    axios.get(BASE_URL + POSTS_URL).then(response => {
      return Promise.all(response.data.map(post => {
        return axios.get(BASE_URL + USER_URL + post.userId).then(response => {
          return {
            ...post,
            author: response.data.name,
          }
        });
      }))
    }).then(updatedPosts => {
      console.log(updatedPosts);
      this.setState({ posts: updatedPosts});
    }).catch(error => {
      console.log(error);
    })
    
  }
  togglePostsForm = () => {
    this.setState(prevState => {
      console.log("[Blog] Toggling form");
      return { postsFormShown: !prevState.postsFormShown};
    })
  }
  changePostId = (id) => {
    this.setState({ postId: id });
  }
  render() {
    console.log("[Blog] render");
    let postsForm = null;
    if (this.state.postsFormShown) {
      postsForm = (
        <section className="NewPost">
            <p>New post form will be here</p>
        </section>
      );
    }
    return (
      <>
        <section className="Posts">
          {this.state.posts.map(post =>
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              clicked={() => this.changePostId(post.id)}
            />)}
        </section>
        <section>
          <FullPost id={this.state.postId} />
        </section>
        <button onClick={this.togglePostsForm}>New Post</button>
        {postsForm}
      </>
    );
  }
}

export default Blog;