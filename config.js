import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyArpVDhw-porXxxSK-2WmUrSr6ORjbB40I",
    authDomain: "fruit-catcher-1bbdf.firebaseapp.com",
    databaseURL: "https://fruit-catcher-1bbdf-default-rtdb.firebaseio.com",
    projectId: "fruit-catcher-1bbdf",
    storageBucket: "fruit-catcher-1bbdf.appspot.com",
    messagingSenderId: "585240401204",
    appId: "1:585240401204:web:fc6f04d85266e32ba7c161"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


