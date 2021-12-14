import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";

function AddPost({ userInformation }) {
  const navigate = useNavigate();
  function submitPost(e) {
    e.preventDefault();
    const uid = userInformation.uid;
    const displayName = userInformation.displayName;

    // console.log(e.currentTarget); //gonna be the form
    const comment = e.currentTarget.comment.value;
    const title = e.currentTarget.title.value;
    const artist = e.currentTarget.artist.value;
    const link = e.currentTarget.link.value;

    axios
      .get(
        `http://localhost:4000/newPost?uid=${uid}&displayName=${displayName}&comment=${comment}&title=${title}&artist=${artist}&link=${link}`
      )
      .then((res) => {
        console.log(res);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        console.warn(err);
      });
  }
  return (
    <div className="PageWrapper">
      <h1>This is add post page</h1>
      <AddPostForm submitPost={submitPost} />
    </div>
  );
}

export default AddPost;
