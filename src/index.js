import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrwc-OcYdpfKwzBgvEcot8BVkqGaRe5Co",
  authDomain: "dubhacks-universal-wellness.firebaseapp.com",
  projectId: "dubhacks-universal-wellness",
  storageBucket: "dubhacks-universal-wellness.appspot.com",
  messagingSenderId: "72534870870",
  appId: "1:72534870870:web:559022dbd8a864d1e664f7"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
