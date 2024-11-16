// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBczEs6Z9BqJ4FqQAjvHYRGhyawY8vDPZ0",
  authDomain: "second-concep-firebase-968f4.firebaseapp.com",
  projectId: "second-concep-firebase-968f4",
  storageBucket: "second-concep-firebase-968f4.firebasestorage.app",
  messagingSenderId: "342186684643",
  appId: "1:342186684643:web:eeee89ba2a8faf251555d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;