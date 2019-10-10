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
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("/posts").then(res => {
      console.log(res.data.blogs.rows);
      setBlogs({
        blogs: _.sortBy(res.data.blogs.rows, "id")
      });
    });
  }, []);

  function onSubmit() {
    if (title === "") {
      setError("Title cannot be empty!");
    } else if (title.length > 255) {
      setError("Title length should be less than 255 characters!");
    } else if (!email.includes("@")) {
      setError("Please enter a valid email address!");
    } else if (description.length < 3 || description.length > 1000) {
      setError("Description length should be 3 to 1000 characters!");
    } else {
      axios
        .post("/posts/submit", {
          title: title,
          description: description,
          email: email
        })
        .then(() => {
          window.location.href = "/";
          setError("");
          setShow(false);
        })
        .catch(err => console.log(err));
    }
  }

  function showBlogs() {
    setShow(true);
  }

  return (
    <React.Fragment>
      <div className="App">
        <h1>Welcome to Co-Blog</h1>
        <hr />
        <Router>
          <Link to="/">
            <span id="add" onClick={() => setShow(false)}>
              Home
            </span>
          </Link>
          <Link to={{ pathname: "/posts" }}>
            <span id="list" onClick={() => showBlogs()}>
              List
            </span>
          </Link>
          <Link to={{ pathname: "/posts/submit" }}>
            <span id="add" onClick={() => onSubmit()}>
              Add
            </span>
          </Link>
          <hr />
          <Route exact path="/" />
          <Route exact path="/posts" />
          <Route exact path="/posts/submit" />
        </Router>
        {show && blogs && <Blog state={blogs}></Blog>}

        <NewBlog
          error={error}
          setTitle={setTitle}
          setEmail={setEmail}
          setDescription={setDescription}
        />
      </div>
    </React.Fragment>
  );
}
