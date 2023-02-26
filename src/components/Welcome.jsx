import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title is-1 ">Dashboard</h1>
      <h2 className="subtitle is-3 ">
        Welcome Back
        <strong style={{ marginLeft: ".5rem" }}>{user && user.name}</strong>
      </h2>
    </div>
  );
};

export default Welcome;
