// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIOVjIXnnFO8SlkIZZ7-QL7WgvSP8EFA4",
  authDomain: "dailytask-7d3cb.firebaseapp.com",
  projectId: "dailytask-7d3cb",
  storageBucket: "dailytask-7d3cb.appspot.com",
  messagingSenderId: "192299996073",
  appId: "1:192299996073:web:e7b0c3dfb34700bbf7aab8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app