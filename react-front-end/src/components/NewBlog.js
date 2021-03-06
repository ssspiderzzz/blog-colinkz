import React from "react";
import "./NewBlog.css";

export default function NewBlog(props) {
  return (
    <React.Fragment>
      {props.error && <div id="errorEmpty">{props.error}</div>}
      <div id="NewBlog-Container">
        <form>
          <span>Title:</span>
          <input
            name="title"
            id="inputTitle"
            placeholder="title"
            onChange={event => props.setTitle(event.target.value)}
          ></input>
          <span>Email:</span>
          <input
            name="email"
            id="inputEmail"
            placeholder="email address"
            onChange={event => props.setEmail(event.target.value)}
          ></input>
          <hr />
          <span>Description:</span>
          <input
            name="des"
            id="inputDescription"
            placeholder="What are you humming about?"
            onChange={event => props.setDescription(event.target.value)}
          ></input>
        </form>

        <div id="title"></div>
        <div id="description"></div>
        <div id="email"></div>
      </div>
    </React.Fragment>
  );
}
