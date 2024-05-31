// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "your-blog-abc79.firebaseapp.com",
  projectId: "your-blog-abc79",
  storageBucket: "your-blog-abc79.appspot.com",
  messagingSenderId: "996588003467",
  appId: "1:996588003467:web:8ab219053c18d23037748e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);