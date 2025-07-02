import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDfg5XQ-921OKrzaf9TPXKkDY7LSWO2pUM",
  authDomain: "vue3-fbd89.firebaseapp.com",
  projectId: "vue3-fbd89",
  storageBucket: "vue3-fbd89.firebasestorage.app",
  messagingSenderId: "390777121397",
  appId: "1:390777121397:web:dae62ec570ba29716ea63c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db , auth };

