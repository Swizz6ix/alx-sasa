// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoCdsg_vmscK38hEs_FoxtPe21fWkqY70",
  authDomain: "alx-sasa.firebaseapp.com",
  projectId: "alx-sasa",
  storageBucket: "alx-sasa.appspot.com",
  messagingSenderId: "547803034272",
  appId: "1:547803034272:web:39b3d54a57a15c31414fc5",
  measurementId: "G-CD76HVSEQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider }