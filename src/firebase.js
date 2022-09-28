// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFKJ5XKYWhANYWe4QaKnMEaTaKAxIdUMY",
  authDomain: "book-store-26901.firebaseapp.com",
  projectId: "book-store-26901",
  storageBucket: "book-store-26901.appspot.com",
  messagingSenderId: "613612601617",
  appId: "1:613612601617:web:e4f54bd1708206ac8b4cb0",
  measurementId: "G-FLRKXQ37XW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
