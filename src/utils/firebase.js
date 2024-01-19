// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAH17SCIfDj0pH_TrineJUWXTghy0XKX-Q",
  authDomain: "netflixgpt-73849.firebaseapp.com",
  projectId: "netflixgpt-73849",
  storageBucket: "netflixgpt-73849.appspot.com",
  messagingSenderId: "368248505899",
  appId: "1:368248505899:web:7c991940e71cda808acc6e",
  measurementId: "G-PVMWTWTVM7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
