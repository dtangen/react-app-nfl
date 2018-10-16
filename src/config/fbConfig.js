import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCkEsiDZhVbtcRtf_CTvF8RD2a1cFY0AT4",
  authDomain: "nfl-info.firebaseapp.com",
  databaseURL: "https://nfl-info.firebaseio.com",
  projectId: "nfl-info",
  storageBucket: "",
  messagingSenderId: "866228788814"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
