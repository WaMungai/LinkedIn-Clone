// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrv4Ca8KYuNsflNZbrIwBVT4IkKehn5-U",
  authDomain: "linkedinclone-c42a2.firebaseapp.com",
  projectId: "linkedinclone-c42a2",
  storageBucket: "linkedinclone-c42a2.appspot.com",
  messagingSenderId: "666049792946",
  appId: "1:666049792946:web:3b66c9aeaec14a125772ab",
  measurementId: "G-VLZWMHEHSS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firebaseApp = firebase.initializeApp(firebaseConfig)
//For authentication and db
const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db,auth};