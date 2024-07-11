// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbOHCtk4N9PjEwL_xPPZ3MtAD9u5PophU",
  authDomain: "assignment-10-feee4.firebaseapp.com",
  projectId: "assignment-10-feee4",
  storageBucket: "assignment-10-feee4.appspot.com",
  messagingSenderId: "256631580963",
  appId: "1:256631580963:web:881c5485bca780d6c68496",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
