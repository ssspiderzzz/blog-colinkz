import React from "react";
import "./Blog.css";

export default function Blog(props) {
  return (
    <React.Fragment>
      {console.log(props.blogs)}
      <div id="NewBlog-Container">
        <form>
          <span>Title:</span>
          <span id="spanTitle"></span>
          <span>Email:</span>
          <span id="spanEmail"></span>
          <hr />
          <span>Description:</span>
          <span id="spanDescription"></span>
        </form>

        <div id="title"></div>
        <div id="description"></div>
        <div id="email"></div>
      </div>
    </React.Fragment>
  );
}
