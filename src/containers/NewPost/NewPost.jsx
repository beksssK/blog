import React, { useState } from 'react';
import "./NewPost.css";
import axios from "axios";
import {NavLink} from "react-router-dom";

const NewPost = () => {
  const  [fields, setFields] = useState({
    title: "",
    description: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: fields.title,
      description: fields.description,
      date: new Date().toISOString(),
    }
    try {
      await axios.post("https://burger-4b309-default-rtdb.firebaseio.com/posts.json", data);
      console.log("post sent");
      setFields({title: "", description: ""})
    } catch (e) {
      console.error(e);
    }
  }
  const handleTitle = (event) => {
    setFields({ title: event.target.value, description: fields.description })
  }
  const handleDescription = (event) => {
    setFields({title: fields.title, description: event.target.value})
  }
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
      Add new Post
      <div className="Form">
        <form action="#" onSubmit={handleSubmit}>
          <div className="Fields">
            <input value={fields.title} onChange={handleTitle} type="text" placeholder="Title"/>
            <textarea value={fields.description} name="" onChange={handleDescription} id="" placeholder="Description" cols="30" rows="10"/>
          </div>
          <button className="Button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPost;