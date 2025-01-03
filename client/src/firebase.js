// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-9bc46.firebaseapp.com",
  projectId: "mern-blog-9bc46",
  storageBucket: "mern-blog-9bc46.firebasestorage.app",
  messagingSenderId: "554533659061",
  appId: "1:554533659061:web:f4fe85580a0d004747f9fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);