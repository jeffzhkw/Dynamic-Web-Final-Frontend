import React from "react";
import { MOCK_DATA } from "./Home";
import MusicCard from "../components/MusicCard";

function Profile({ userInformation }) {
  //TODO: make 4000 query on list of posts of current user
  return (
    <div className="PageWrapper">
      <h1>This is user profile page</h1>
      <p>Username: </p>
      <h2>Posts</h2>
      {/* Display post by one user */}
      {MOCK_DATA.map((aCard, i) => {
        return (
          <MusicCard
            username={aCard.username}
            comment={aCard.comment}
            link={aCard.link}
            userID={aCard.userID}
          />
        );
      })}
    </div>
  );
}

export default Profile;
