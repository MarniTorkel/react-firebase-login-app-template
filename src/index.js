import React from 'react';
import ReactDOM from 'react-dom';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyCLmPjcikbJTDmzwOyaF-TR23snEX0euKs",
  authDomain: "webpage01-b86fe.firebaseapp.com",
  projectId: "webpage01-b86fe",
  storageBucket: "webpage01-b86fe.appspot.com",
  messagingSenderId: "42408051938",
  appId: "1:42408051938:web:622ac587d4a107b365cabb",
  measurementId: "G-ML0BRNYEH9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
