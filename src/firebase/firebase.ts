import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCxn70Y2mJfweQmnyc_thrkTJFFMx16eWM",
  authDomain: "blog-33fc2.firebaseapp.com",
  projectId: "blog-33fc2",
  storageBucket: "blog-33fc2.appspot.com",
  messagingSenderId: "681347994305",
  appId: "1:681347994305:web:784dc6b5fde5c0161efa40",
  measurementId: "G-26B7KXNWZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage();
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const provider = new GoogleAuthProvider();
