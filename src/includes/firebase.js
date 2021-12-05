import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDd3TFCCvrIVL9aiqGhDJhhY6EoHMoeAa0",
  authDomain: "music-ec31c.firebaseapp.com",
  projectId: "music-ec31c",
  storageBucket: "music-ec31c.appspot.com",
  messagingSenderId: "608470957841",
  appId: "1:608470957841:web:2d12564d4131f4dc6956b0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const userCollection = db.collection("users");
const songsCollection = db.collection("songs");

/* eslint-disable */
export { auth, db, userCollection, songsCollection, storage };
