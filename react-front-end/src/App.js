import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewBlog from "./components/NewBlog.js";

export default function App(props) {
  const [state, setState] = useState("");
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    email: ""
  });

  function onSubmit() {
    axios
      .post("/posts/submit", { newBlog: newBlog })
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
        <h1>{newBlog.title}</h1>
        <h1>{newBlog.email}</h1>
        <h1>{newBlog.description}</h1>
        <header>
          <button id="list">list</button>
          <button id="add" onClick={() => onSubmit()}>
            add
          </button>
        </header>
        <NewBlog setNewBlog={setNewBlog} />
      </div>
    </React.Fragment>
  );
}
