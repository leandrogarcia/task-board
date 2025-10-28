
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRC6g5nZFq3GjAqVSlrOdCcLRlZlvHm60",
  authDomain: "tarefasplus-89d5f.firebaseapp.com",
  projectId: "tarefasplus-89d5f",
  storageBucket: "tarefasplus-89d5f.firebasestorage.app",
  messagingSenderId: "156945864899",
  appId: "1:156945864899:web:fd0cfee01db30f6e966a76"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };