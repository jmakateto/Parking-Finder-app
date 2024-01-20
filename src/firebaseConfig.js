// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNIgoi-IPQadmb9yWP4zEZGxOF8tMMDFE",
  authDomain: "login-3693c.firebaseapp.com",
  projectId: "login-3693c",
  storageBucket: "login-3693c.appspot.com",
  messagingSenderId: "948830462135",
  appId: "1:948830462135:web:74cd67497a9ba9b9776d32",
  measurementId: "G-9B0NRT0PFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);