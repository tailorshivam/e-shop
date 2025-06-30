import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0rYklgo8Q6pSU80ZR9MErt8l3riv5ndM",
  authDomain: "e-commerce-3bf77.firebaseapp.com",
  projectId: "e-commerce-3bf77",
  storageBucket: "e-commerce-3bf77.firebasestorage.app",
  messagingSenderId: "931787753685",
  appId: "1:931787753685:web:e03257b156cc3280677a5c",
  measurementId: "G-0C6KX9KLRD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();