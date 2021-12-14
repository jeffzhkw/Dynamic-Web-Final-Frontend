import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <div className="PageWrapper">
      <h1>Welcome</h1>
      <p>
        Please <Link to="/login">Login</Link> or{" "}
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default Start;
