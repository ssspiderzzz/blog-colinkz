import React from "react";
import "./Blog.css";

export default function Blog(props) {
  console.log(props.state.blogs);
  return (
    <React.Fragment>
      {props.state.blogs.map((blog, index) => {
        return (
          <div id="Blog-Container" key={index}>
            <form>
              <span id="spanTitle">
                Title:
                {blog.title}
              </span>
              <br></br>
              <span id="spanEmail">By: {blog.email}</span>
              <hr />
              <span id="spanDescription">Description: {blog.description}</span>
            </form>

            <div id="title"></div>
            <div id="description"></div>
            <div id="email"></div>
          </div>
        );
      })}
    </React.Fragment>
  );
}
