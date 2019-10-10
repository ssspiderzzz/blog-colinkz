import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewBlog from "./components/NewBlog.js";

export default function App(props) {
  const [blogs, setBlogs] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

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
        <header>
          <button id="list">List</button>
          <button id="add" onClick={() => onSubmit()}>
            Add
          </button>
        </header>
        <NewBlog
          setTitle={setTitle}
          setEmail={setEmail}
          setDescription={setDescription}
        />
      </div>
    </React.Fragment>
  );
}
