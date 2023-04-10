import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM8Nuxpa6m9qKsvAGTcwXpUlgtR0F4Hyg",
  authDomain: "base-comision-39560.firebaseapp.com",
  projectId: "base-comision-39560",
  storageBucket: "base-comision-39560.appspot.com",
  messagingSenderId: "537102792460",
  appId: "1:537102792460:web:c56628e54b04a0d287fb29"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <App />
  
  </React.StrictMode>,
)
