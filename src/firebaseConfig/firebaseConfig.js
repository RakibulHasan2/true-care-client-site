// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpWKjHOh8cvkhiIq3HR0RCjF73FwG-teo",
  authDomain: "true-care-e2eb9.firebaseapp.com",
  projectId: "true-care-e2eb9",
  storageBucket: "true-care-e2eb9.appspot.com",
  messagingSenderId: "746438250734",
  appId: "1:746438250734:web:7cc8628fce459c1e81a3ff",
  measurementId: "G-MJG6KG8FT0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;