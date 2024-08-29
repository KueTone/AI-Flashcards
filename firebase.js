// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5bufbxXD03Sm0nB7uNiCl301UJKM9yIs",
  authDomain: "flashcard-saas-1c47f.firebaseapp.com",
  projectId: "flashcard-saas-1c47f",
  storageBucket: "flashcard-saas-1c47f.appspot.com",
  messagingSenderId: "74846328483",
  appId: "1:74846328483:web:cfb9d4b5aff063d1d4d116",
  measurementId: "G-H77DH8LN2X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;