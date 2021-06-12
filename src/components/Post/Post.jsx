import React from "react";
import "./Post.css";
import { parseISO } from "date-fns";

const Post = (props) => {
  return (
    <div key={props.id} className="Post">
      <div className="postDate">{parseISO(props.date).toDateString()}</div>
      <h3>{props.title}</h3>
      <button className="Button">Read More</button>
    </div>
  )
}

export default Post;