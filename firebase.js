import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBuSoORiw3UL6lQAgu1MLoDtBWGpFbrdVk",
  authDomain: "crud-4-200bc.firebaseapp.com",
  projectId: "crud-4-200bc",
  databaseURL: "https://crud-4-200bc-default-rtdb.firebaseio.com/",
  storageBucket: "crud-4-200bc.firebasestorage.app",
  messagingSenderId: "439122748279",
  appId: "1:439122748279:web:323cc5c546b8f7052f7772",
  measurementId: "G-TQSLP4JKKM"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);