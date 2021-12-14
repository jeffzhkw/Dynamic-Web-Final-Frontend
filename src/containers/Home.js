import { React, useState, useEffect } from "react";
import axios from "axios";
import MusicCard from "../components/MusicCard";

function Home() {
  const [postList, setPostList] = useState([]);
  //Get all music post
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL)
      .then((res) => {
        console.log(res);
        setPostList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="PageWrapper">
      <h1>Home </h1>
      <h2>All the posts are here</h2>
      {postList.map((aCard, i) => {
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

export default Home;
