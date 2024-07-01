// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw9UUIoWQpRtx6A8U219FvkQpRwr4Wfb4",
  authDomain: "jp-task.firebaseapp.com",
  projectId: "jp-task",
  storageBucket: "jp-task.appspot.com",
  messagingSenderId: "937137694899",
  appId: "1:937137694899:web:f37502441dff7e8d4528c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;