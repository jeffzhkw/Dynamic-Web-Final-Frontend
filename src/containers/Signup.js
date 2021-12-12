import React, { useCallback } from "react";
import CreateUserForm from "../components/CreateUserForm";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//page of data source
function Signup({ setLoggedIn, setUserInformation }) {
  // const signUpUser = useCallback(
  //   (e) => {
  //     e.preventDefault(); //let us have more control over our form

  //     //currentTarget.email: targeting the input element
  //     const email = e.currentTarget.email.value;
  //     const password = e.currentTarget.password.value;

  //     console.log({ email, password });

  //     const auth = getAuth();
  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed in
  //         const user = userCredential.user;
  //         setLoggedIn(true);
  //         setUserInformation({
  //           email: user.email,
  //           displayNmae: user.displayName,
  //           uid: user.uid,
  //           accessToken: user.accessToken,
  //         });
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.warn({ errorCode, errorMessage });
  //       });
  //   },
  //   [setLoggedIn, setUserInformation]
  // );

  return (
    <>
      <h1>This is signup page</h1>
      <CreateUserForm />
    </>
  );
}

export default Signup;
