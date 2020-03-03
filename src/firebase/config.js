import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const config = {
  apiKey: "AIzaSyCBwN8_kF-1pxFJi52jisvqkmfENvBA3OA",
  authDomain: "db-test-20a20.firebaseapp.com",
  databaseURL: "https://db-test-20a20.firebaseio.com",
  projectId: "db-test-20a20"
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore();
