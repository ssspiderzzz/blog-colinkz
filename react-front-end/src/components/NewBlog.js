import React, { useState } from "react";
import axios from "axios";
import "./NewBlog.css";

export default function NewOrder(props) {
  const [errorCheck, setErrorCheck] = useState(false);
  const [state, setState] = useState({
    title: "",
    description: "",
    email: ""
  });

  return (
    <React.Fragment>
      {errorCheck && <div id="errorEmpty">Title could not be empty.</div>}
      <div id="NewBlog-Container">
        <form>
          <input name="title" id="inputTitle" placeholder="title"></input>
          <input
            name="email"
            id="inputEmail"
            placeholder="email address"
          ></input>
          <hr />
          <input
            name="des"
            id="inputDescription"
            placeholder="What are you humming about?"
          ></input>
        </form>

        <div id="title"></div>
        <div id="description"></div>
        <div id="email"></div>
      </div>
    </React.Fragment>
  );
}
