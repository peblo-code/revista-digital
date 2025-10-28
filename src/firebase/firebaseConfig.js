// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0IddXRyRr9WbG8PEh5oKWfNQD5eXAmYY",
  authDomain: "revista-digital-sanblas.firebaseapp.com",
  projectId: "revista-digital-sanblas",
  storageBucket: "revista-digital-sanblas.firebasestorage.app",
  messagingSenderId: "930429078647",
  appId: "1:930429078647:web:17f3fed91482c31d314a72",
  measurementId: "G-R7P5JVS9JZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);