// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjN4vx-33N7SI6yQnrHGNTEUvNkVb6H9g",
    authDomain: "red-onion-project-7e824.firebaseapp.com",
    projectId: "red-onion-project-7e824",
    storageBucket: "red-onion-project-7e824.appspot.com",
    messagingSenderId: "429583774617",
    appId: "1:429583774617:web:a34356cf5cdd0a505d9908"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;