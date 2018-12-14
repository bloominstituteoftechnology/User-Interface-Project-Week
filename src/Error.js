import React from "react";
import Error from "./img/404bob.jpeg";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <img src={Error} alt="" />
      <p>
        You must have been looking for something else; let me fix that for you!
      </p>
      <NavLink to="/">Home</NavLink>
    </div>
  );
};

export default Error;
