import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAyirhYM-x6ltCHOzWidGVAy93PizO4tqk",
  authDomain: "news-portal-98068.firebaseapp.com",
  projectId: "news-portal-98068",
  storageBucket: "news-portal-98068.appspot.com",
  messagingSenderId: "910487241766",
  appId: "1:910487241766:web:3b9ca8d554d9a6cf80d2e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage=getStorage(app);
export const auth = getAuth(app);