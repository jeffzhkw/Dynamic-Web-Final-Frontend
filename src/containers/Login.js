import React, { useCallback } from "react";
import LoginForm from "../components/LoginForm";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//page of data source
function Login({ setErrors, setLoggedIn, setUserInformation }) {
  const loginUser = useCallback(
    (e) => {
      e.preventDefault(); //let us have more control over our form

      //currentTarget.email: targeting the input element
      const email = e.currentTarget.email.value;
      const password = e.currentTarget.password.value;

      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setLoggedIn(true);
          // setUserInformation({
          //   email: user.email,
          //   displayNmae: user.displayName,
          //   uid: user.uid,
          //   accessToken: user.accessToken,
          // });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.warn({ errorCode, errorMessage });
          setErrors(errorMessage);
        });
    },
    [setLoggedIn, setErrors]
  );

  return (
    <div className="PageWrapper">
      <h1>This is login page</h1>
      <LoginForm loginUser={loginUser} />
    </div>
  );
}

export default Login;
