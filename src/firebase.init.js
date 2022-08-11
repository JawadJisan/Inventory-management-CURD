// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCamga8xbXPQA2hytiog6ue9qQKcYllBTk",
  authDomain: "inventory-management-76c13.firebaseapp.com",
  projectId: "inventory-management-76c13",
  storageBucket: "inventory-management-76c13.appspot.com",
  messagingSenderId: "45700937155",
  appId: "1:45700937155:web:923955a2debbd676377976",
  measurementId: "G-RFLVVY420C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

