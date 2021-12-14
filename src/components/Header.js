import React from "react";

function Header({ logout, loggedIn, userInformation }) {
  console.log(userInformation);
  return (
    <header className="HeaderWrapper">
      <div className="Header">
        <h1>Music Sharing Site</h1>
        <nav>
          {loggedIn && (
            <>
              <a href="/home">Home</a>
              <a href="/addpost">Add Post</a>
              <a href={`/profile/${userInformation.uid}`}>
                {userInformation.displayName}
              </a>
              <button onClick={() => logout()}>Log out</button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
