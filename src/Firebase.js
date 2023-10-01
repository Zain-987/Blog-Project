// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-8d615.firebaseapp.com",
  projectId: "mern-auth-8d615",
  storageBucket: "mern-auth-8d615.appspot.com",
  messagingSenderId: "249710523365",
  appId: "1:249710523365:web:e2ee55b2310b8987c7350c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);