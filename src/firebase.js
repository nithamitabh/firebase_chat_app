import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBoP3X-FuzCY8DzLQD7aH7fpByEypJUkHM",
  authDomain: "chatting-9d6ab.firebaseapp.com",
  projectId: "chatting-9d6ab",
  storageBucket: "chatting-9d6ab.appspot.com",
  messagingSenderId: "610891493148",
  appId: "1:610891493148:web:e0722038c798440ee254d9",
  measurementId: "G-1FS5HZ94SG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();