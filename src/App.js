import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import AddPost from "./containers/AddPost";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Signup from "./containers/Signup";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />}></Route>

          <Route path="/login" element={<Login />}></Route>

          <Route path="/home" element={<Home />}></Route>

          <Route path="/profile/:id" element={<Profile />}></Route>

          <Route path="/addpost" element={<AddPost />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
