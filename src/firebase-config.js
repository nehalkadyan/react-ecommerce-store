import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkMx3SqQ4oNfXVOxR-oTTeUREQ9S97ye8",
  authDomain: "chat-app-69e8d.firebaseapp.com",
  projectId: "chat-app-69e8d",
  storageBucket: "chat-app-69e8d.appspot.com",
  messagingSenderId: "1001743106984",
  appId: "1:1001743106984:web:2377456a6c1fec77c8939d"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);