import React, { useState } from "react";
import "./NewBlog.css";

export default function NewBlog(props) {
  const [errorCheck, setErrorCheck] = useState(false);

  return (
    <React.Fragment>
      {errorCheck && <div id="errorEmpty">Title could not be empty.</div>}
      <div id="NewBlog-Container">
        <form>
          <span>Title:</span>
          <input
            name="title"
            id="inputTitle"
            placeholder="title"
            onChange={event =>
              props.setNewBlog({ ...props.newBlog, title: event.target.value })
            }
          ></input>
          <span>Email:</span>
          <input
            name="email"
            id="inputEmail"
            placeholder="email address"
            onChange={event =>
              props.setNewBlog({ ...props.newBlog, email: event.target.value })
            }
          ></input>
          <hr />
          <span>Description:</span>
          <input
            name="des"
            id="inputDescription"
            placeholder="What are you humming about?"
            onChange={event =>
              props.setNewBlog({
                ...props.newBlog,
                description: event.target.value
              })
            }
          ></input>
        </form>

        <div id="title"></div>
        <div id="description"></div>
        <div id="email"></div>
      </div>
    </React.Fragment>
  );
}
