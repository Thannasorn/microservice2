// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAol74iZvfVUdhkkVPFJ340tc-ypEhDw_k",
  authDomain: "test-micro2.firebaseapp.com",
  projectId: "test-micro2",
  storageBucket: "test-micro2.appspot.com",
  messagingSenderId: "627521548418",
  appId: "1:627521548418:web:b4d1c0b26c928d3b9f849b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
module.exports = {firebase}
