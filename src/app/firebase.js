// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDtfGqfQaQrQyq3PDgntMC3sPKxnOYQfts",
    authDomain: "expense-tracker-11da7.firebaseapp.com",
    projectId: "expense-tracker-11da7",
    storageBucket: "expense-tracker-11da7.appspot.com",
    messagingSenderId: "154488724416",
    appId: "1:154488724416:web:826d8b18adc5ef219ec625"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)