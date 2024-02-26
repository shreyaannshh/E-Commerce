// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArGI6twFRwWly3e-6UDBh8qCQIlzj6EW4",
  authDomain: "myfirstapp-6a644.firebaseapp.com",
  projectId: "myfirstapp-6a644",
  storageBucket: "myfirstapp-6a644.appspot.com",
  messagingSenderId: "23478630871",
  appId: "1:23478630871:web:f8315eef15e857fe247392"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth= getAuth(app);
export {fireDB,auth}