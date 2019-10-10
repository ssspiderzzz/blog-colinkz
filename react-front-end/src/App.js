import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewBlog from "./components/NewBlog.js";

export default function App(props) {
  const [state, setState] = useState("");
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
        <h1>{title}</h1>
        <h1>{email}</h1>
        <h1>{description}</h1>
        <header>
          <button id="list">list</button>
          <button id="add" onClick={() => onSubmit()}>
            add
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
