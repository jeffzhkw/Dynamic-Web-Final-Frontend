import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import MusicCard from "../components/MusicCard";

function Profile({ userInformation }) {
  //TODO: make 4000 query on list of posts of current user

  const { uid } = useParams();
  const [userPostList, setUserPostList] = useState([]);
  //Get all music post
  useEffect(() => {
    console.log(uid);
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/${uid}`)
      .then((res) => {
        console.log(res.data);
        setUserPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [uid]);

  return (
    <div className="PageWrapper">
      <h1>This is user profile page</h1>
      <p>Username: {userInformation.displayName}</p>
      <p>user email: {userInformation.email}</p>
      <h2>Posts</h2>
      {/* Display post by one user */}
      {userPostList.map((aCard, i) => {
        return (
          <MusicCard
            displayName={aCard.displayName}
            uid={aCard.uid}
            comment={aCard.comment}
            title={aCard.title}
            artist={aCard.artist}
            link={aCard.link}
          />
        );
      })}
    </div>
  );
}

export default Profile;
