// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGCizss4K6y7LTAOl_OIrjFj8kjcQdH0w",
  authDomain: "netflix-chatgpt-c29ad.firebaseapp.com",
  databaseURL: "https://netflix-chatgpt-c29ad-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "netflix-chatgpt-c29ad",
  storageBucket: "netflix-chatgpt-c29ad.appspot.com",
  messagingSenderId: "188903041524",
  appId: "1:188903041524:web:b02b1d0cb6be0832a871a1",
  measurementId: "G-PRYY8Z8PBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();