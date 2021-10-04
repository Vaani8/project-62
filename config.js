import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAjocxFPKXAUmLNf6hN5ELCTQA7FegGHbA",
  authDomain: "project-60-e7d7b.firebaseapp.com",
  databaseURL: "https://project-60-e7d7b-default-rtdb.firebaseio.com",
  projectId: "project-60-e7d7b",
  storageBucket: "project-60-e7d7b.appspot.com",
  messagingSenderId: "327938973735",
  appId: "1:327938973735:web:e22f7552f75ac89226ae02"
};
  firebase.initializeApp(firebaseConfig)
  export default firebase.database()