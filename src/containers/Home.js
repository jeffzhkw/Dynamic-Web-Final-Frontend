import { React, useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";

export const MOCK_DATA = [
  {
    postID: "aqwerasd;lkj",
    uid: "asdfjkl;",
    displayName: "jeffzhkw",
    comment: "good",
    title: "asdfasdfasdf",
    artist: "asdf",
    link: "asdfasdf",
  },
];

const URL = `http://localhost:4000`;

function Home() {
  const [postList, setPostList] = useState([]);
  //Get all music post
  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="PageWrapper">
      <h1>This is Home page with all the post </h1>
      {postList.map((aCard, i) => {
        return (
          <MusicCard
            username={aCard.username}
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

export default Home;
