import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import NewBlog from "./components/NewBlog.js";

export default function App(props) {
  const [state, setState] = useState("");

  return (
    <React.Fragment>
      <div className="App">
        <h1>Welcome to Co-Blog</h1>
        <hr />
        <h1>{state.message}</h1>
        <header>
          <button id="list">list</button>
          <button id="add">add</button>
        </header>
        <NewBlog />
      </div>
    </React.Fragment>
  );
}
