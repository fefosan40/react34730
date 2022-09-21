import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { initializeApp } from "firebase/app";
import App from './App';

const firebaseConfig = {
  apiKey: "AIzaSyA5HAJ6HVffKrTHaAcWEvlvCVt1B02ainc",
  authDomain: "coderh-ecommerce-aba13.firebaseapp.com",
  projectId: "coderh-ecommerce-aba13",
  storageBucket: "coderh-ecommerce-aba13.appspot.com",
  messagingSenderId: "170033237789",
  appId: "1:170033237789:web:12465156f2993f5cfa9bf4",
  measurementId: "G-VV9DZXYJPD"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


