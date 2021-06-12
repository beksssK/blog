import React from "react";
import './App.css';
import Blog from "./containers/Blog/Blog";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NewPost from "./containers/NewPost/NewPost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Blog}/>
          <Route path="/posts/add" component={NewPost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
