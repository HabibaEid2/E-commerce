// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDf27FtddLkUiQR_F8aRTrYUjnV7DNV-Ls",
    authDomain: "e-commerce-3e764.firebaseapp.com",
    projectId: "e-commerce-3e764",
    storageBucket: "e-commerce-3e764.appspot.com",
    messagingSenderId: "20823462720",
    appId: "1:20823462720:web:96bf306e3603e8cd2c60a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app) 

export default app ; 