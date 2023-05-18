// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAonkoo5NkqxFO2eSaEcArKPKwyQBstsA8",
  authDomain: "terniumweb.firebaseapp.com",
  projectId: "terniumweb",
  storageBucket: "terniumweb.appspot.com",
  messagingSenderId: "1024699954112",
  appId: "1:1024699954112:web:8538a883a143f2b851ce25",
  measurementId: "G-ED8DE28BCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);