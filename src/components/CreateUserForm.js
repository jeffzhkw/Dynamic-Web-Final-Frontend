import React from "react";

function CreateUserForm({ signUpUser }) {
  return (
    <div className="Form">
      <h2>Create User Form</h2>
      <form onSubmit={(e) => signUpUser(e)}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="Enter Email"></input>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
        ></input>
        <label htmlFor="displayName">Username</label>
        <input
          type="text"
          name="displayName"
          placeholder="Enter Your Display Username"
        ></input>
        <button type="submit">Create User!</button>
      </form>
    </div>
  );
}

export default CreateUserForm;
