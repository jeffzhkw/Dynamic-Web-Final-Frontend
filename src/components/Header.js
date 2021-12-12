import React from "react";

const userID;
function Header() {}
return (
  <header>
    <a href="/home">Home</a>
    <a href="/login">Login</a>
    <a href="/addpost">Add Post</a>
    {/* Get user ID */}
    <a href={"/profile/"+userID}>Profile</a>
    <a href=""></a>
  </header>
);
