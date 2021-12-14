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
      <h1>Profile</h1>
      {/* Display post by one user */}
      {userPostList.length !== 0 ? (
        userPostList.map((aCard, i) => {
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
        })
      ) : (
        <p>No post for this user</p>
      )}
    </div>
  );
}

export default Profile;
