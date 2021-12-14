import React from "react";
import { Navigate } from "react-router";

function Start({ loggedIn }) {
  return (
    <div className="PageWrapper">
      <h1>Start Page</h1>
      <p>This is the landing page</p>
      {!loggedIn ? (
        <>
          <a href="/login">Login</a>
          <a href="/signup">Sign Up</a>
        </>
      ) : (
        <Navigate to="/home" />
      )}
    </div>
  );
}

export default Start;
