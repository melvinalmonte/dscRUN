import { ref, firebaseAuth } from "../firebase/config";
import history from "../history";

export const saveUser = user =>
  ref
    .child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user);

// If user does not have an account this function will allow them to sign up with firebase.
export const signUp = (email, pass) =>
  firebaseAuth()
    .createUserWithEmailAndPassword(email, pass)
    .then(saveUser)
    .then(() => {
      history.push("/redirect");
    });

// Allows the user to log in with their email and password which is already in firebase.
export const logIn = (email, pass) =>
  firebaseAuth()
    .signInWithEmailAndPassword(email, pass)
    .then(() => {
      history.push("/redirect");
    });

// Allows user to reset password by sending temp via email.
export const resetPass = email => firebaseAuth().sendPasswordResetEmail(email);

// Self explanatory.
export const logout = () =>
  firebaseAuth()
    .signOut()
    .then(() => {
      history.push("/");
    });
