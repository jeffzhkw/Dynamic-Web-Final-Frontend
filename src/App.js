import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import AddPost from "./containers/AddPost";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Profile from "./containers/Profile";
import Signup from "./containers/Signup";
import Start from "./containers/Start";

import Header from "./components/Header";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
// Your web app's Firebase configuration
import FirebaseConfig from "./components/FirebaseConfig";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // Track if user is logged in
  const [loading, setLoading] = useState(true); // Check to see if there is any loading ... prevent multiple time submit
  const [userInformation, setUserInformation] = useState({}); //store userInfo in state.
  const [appInitialized, setAppInitialized] = useState(false);

  const [errors, setErrors] = useState();

  useEffect(() => {
    initializeApp(FirebaseConfig);
    setAppInitialized(true);
  }, []);

  useEffect(() => {
    if (appInitialized) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          setUserInformation(user);
          // console.log(userInformation); Question here.
          setLoggedIn(true);
        } else {
          // User is signed out
          setUserInformation({});
          setLoggedIn(false);
        }
        setLoading(false);
      });
    }
  }, [appInitialized]);

  function logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUserInformation({});
        setLoggedIn(false);
        setErrors();
      })
      .catch((error) => {
        console.ware(error);
        setErrors(error);
      });
  }

  if (loading || !appInitialized) return null;

  return (
    <div className="App">
      <Header
        logout={logout}
        loggedIn={loggedIn}
        userInformation={userInformation}
      />
      {errors && <p className="Error PageWrapper">{errors}</p>}
      <Router>
        <Routes>
          <Route
            path="/signup"
            element={
              !loggedIn ? (
                <Signup
                  setErrors={setErrors}
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>

          <Route
            path="/login"
            element={
              !loggedIn ? (
                <Login
                  setErrors={setErrors}
                  setLoggedIn={setLoggedIn}
                  setUserInformation={setUserInformation}
                />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>

          <Route
            path="/home"
            element={loggedIn ? <Home /> : <Navigate to="/" />}
          ></Route>

          <Route
            path="/profile/:uid"
            element={
              loggedIn ? (
                <Profile userInformation={userInformation} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>

          <Route
            path="/addpost"
            element={
              loggedIn ? (
                <AddPost userInformation={userInformation} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>

          <Route
            path="/"
            element={
              !loggedIn ? (
                <Start loggedIn={loggedIn} />
              ) : (
                <Navigate to="/home" />
              )
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
