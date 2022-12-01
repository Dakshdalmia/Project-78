import firebase from "firebase";
//require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyCPIou1LOqQ6HJc3lNG6I9mMlr8wXHsmY0",
  authDomain: "e-ride-f4568.firebaseapp.com",
  projectId: "e-ride-f4568",
  storageBucket: "e-ride-f4568.appspot.com",
  messagingSenderId: "630059192537",
  appId: "1:630059192537:web:19f3c1ac16ac924da16ec8"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


