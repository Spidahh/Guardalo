// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQ9Fo1NiiDa3-c7Z2F3CCJbCZCxKzRjXo",
    authDomain: "guardalo-ea806.firebaseapp.com",
    projectId: "guardalo-ea806",
    storageBucket: "guardalo-ea806.firebasestorage.app",
    messagingSenderId: "682270952898",
    appId: "1:682270952898:web:4cdaa3dd994579a74fda5b",
    measurementId: "G-Y9X3Q6TV3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
