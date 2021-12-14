// User that send this
import React from "react";

function MusicCard({ displayName, uid, title, artist, comment, link }) {
  return (
    <div className="MusicCard">
      <p>This is a music card</p>
      <div>
        <h1>{title}</h1>
        <h2>{artist}</h2>
        <p>
          Posted by: <a href={`/profile/${uid}`}>{displayName}</a>
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
