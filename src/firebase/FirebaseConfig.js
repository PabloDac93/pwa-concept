// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//import { getAuth } from "firebase/auth"; 
//import { getAnalytics } from "firebase/analytics";
//import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZFNFZEWCdAy0X_euAOcwZ98A48Mlftw",
  authDomain: "pwa-concept.firebaseapp.com",
  projectId: "pwa-concept",
  storageBucket: "pwa-concept.appspot.com",
  messagingSenderId: "231747805540",
  appId: "1:231747805540:web:4f3ac32d1ef716c53d5a71",
  measurementId: "G-1D0PQSB4FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
//const db = getFirestore(app);
//const analytics = getAnalytics(app);

export default app;