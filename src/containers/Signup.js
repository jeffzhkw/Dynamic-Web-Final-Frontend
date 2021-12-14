import React, { useCallback } from "react";
import CreateUserForm from "../components/CreateUserForm";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

//page of data source
function Signup({ setErrors, setLoggedIn, setUserInformation }) {
  const signUpUser = useCallback(
    (e) => {
      e.preventDefault(); //let us have more control over our form

      //currentTarget.email: targeting the input element
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;
      const displayName = e.currentTarget.displayName.value;

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setLoggedIn(true);
          // setUserInformation({
          //   email: user.email,
          //   displayName: user.displayName,
          //   uid: user.uid,
          //   accessToken: user.accessToken,
          // });
          updateProfile(auth.currentUser, { displayName: displayName });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ errorCode, errorMessage });
        });
    },
    [setLoggedIn, setUserInformation]
  );

  return (
    <div className="PageWrapper">
      <h1>This is signup page</h1>
      <CreateUserForm signUpUser={signUpUser} />
    </div>
  );
}

export default Signup;
