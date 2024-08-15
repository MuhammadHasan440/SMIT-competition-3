import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBoJ75tOE4yrn59kbD4l4YnRWwUpN1CEq0",
    authDomain: "smit-competition-3-7e78c.firebaseapp.com",
    projectId: "smit-competition-3-7e78c",
    storageBucket: "smit-competition-3-7e78c.appspot.com",
    messagingSenderId: "251725946668",
    appId: "1:251725946668:web:df469081350f1fadbf5689",
    measurementId: "G-TF4732TE08"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);