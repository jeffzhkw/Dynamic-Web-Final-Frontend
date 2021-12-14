import React from "react";
import { Link } from "react-router-dom";

function Header({ logout, loggedIn, userInformation }) {
  console.log(userInformation);
  return (
    <header className="HeaderWrapper">
      <div className="Header">
        <h1>Music Sharing Site</h1>
        <nav>
          {loggedIn && (
            <>
              <Link to="/home">Home</Link>
              <Link to="/addpost">Add Post</Link>
              <Link to={`/profile/${userInformation.uid}`}>
                {userInformation.displayName}
              </Link>
              <button onClick={() => logout()}>Log out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
