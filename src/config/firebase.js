import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAencWvpbizerAw4S6_1xmb1A0ZDkGh7dc",
  authDomain: "e-commerce-45c7f.firebaseapp.com",
  projectId: "e-commerce-45c7f",
  storageBucket: "e-commerce-45c7f.firebasestorage.app",
  messagingSenderId: "50399154192",
  appId: "1:50399154192:web:ce9840a11fc84104817a95",
  measurementId: "G-NDV73C1605"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);