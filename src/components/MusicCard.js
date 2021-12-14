// User that send this
import React from "react";
import { Link } from "react-router-dom";
function MusicCard({ displayName, uid, title, artist, comment, link }) {
  return (
    <div className="MusicCard">
      <div>
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <p>
          Posted by: <Link to={`/profile/${uid}`}>{displayName}</Link>
        </p>

        <p>Comment: {comment}</p>
      </div>
      <div>
        <p>
          Original Link: <a href={link}>Here</a>
        </p>
      </div>
    </div>
  );
}

export default MusicCard;
