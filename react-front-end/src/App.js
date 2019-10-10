import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
import "./App.css";
import NewBlog from "./components/NewBlog.js";
import Blog from "./components/Blog.js";

export default function App(props) {
  const [blogs, setBlogs] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get("/posts").then(res => {
      console.log(res.data.blogs.rows);
      setBlogs({
        blogs: _.sortBy(res.data.blogs.rows, "id")
      });
    });
  }, []);

  function onSubmit() {
    axios
      .post("/posts/submit", {
        title: title,
        description: description,
        email: email
      })
      .then(() => {
        window.location.href = "/";
      })
      .catch(err => console.log(err));
  }

  return (
    <React.Fragment>
      <div className="App">
        <h1>Welcome to Co-Blog</h1>
        <hr />
        <Router>
          <Link to={{ pathname: "/posts", blogs: blogs }}>
            <span id="list">List</span>
          </Link>
          <Link to={{ pathname: "/posts/submit" }}>
            <span id="add" onClick={() => onSubmit()}>
              Add
            </span>
          </Link>
          <hr />
          <Route exact path="/posts" component={Blog} />
          <Route exact path="/posts/submit" />
        </Router>

        <NewBlog
          setTitle={setTitle}
          setEmail={setEmail}
          setDescription={setDescription}
        />
      </div>
    </React.Fragment>
  );
}
