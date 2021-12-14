import React from "react";

function AddPostForm({ submitPost }) {
  return (
    <div className="Form">
      <h2>Add Post Form</h2>
      <form onSubmit={(e) => submitPost(e)}>
        <label htmlFor="comment">Comment</label>
        <input
          type="text"
          name="comment"
          placeholder="Say Something..."
        ></input>

        <label htmlFor="title">Title</label>
        <input type="text" name="title" placeholder="Enter music title"></input>

        <label htmlFor="artist">Artist</label>
        <input
          type="text"
          name="artist"
          placeholder="Enter the artist name"
        ></input>

        <label htmlFor="link">Link</label>
        <input
          type="text"
          name="link"
          placeholder="Enter a link to the music"
        ></input>

        <button type="submit">Post!</button>
      </form>
    </div>
  );
}

export default AddPostForm;
