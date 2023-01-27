import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjO6dfmz8q0AClMkzjNkGyMXG2fkJHChc",
  authDomain: "vikki-7dd64.firebaseapp.com",
  projectId: "vikki-7dd64",
  storageBucket: "vikki-7dd64.appspot.com",
  messagingSenderId: "108498932108",
  appId: "1:108498932108:web:3ce1721eeb8f570f3c46a9",
  measurementId: "G-LPDN769GKJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };