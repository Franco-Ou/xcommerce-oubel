import firebase from "firebase";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBzOf5WQr-6bi4DcXq6omjwCWTzAJ2DECo",
    authDomain: "xcommerce-cea2f.firebaseapp.com",
    projectId: "xcommerce-cea2f",
    storageBucket: "xcommerce-cea2f.appspot.com",
    messagingSenderId: "846253443043",
    appId: "1:846253443043:web:6cb7e97a1126d2ac4782d6"
  };
  // Initialize Firebase
 const app = firebase.initializeApp(firebaseConfig);

 export function getFirebase(){
     return app;
 }

 export function getFirestore(){
     return firebase.firestore(app);
 }