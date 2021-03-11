import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDDrPPV7O9uCaSJOltlW0PxyftP0ViIvqE",
    authDomain: "react-firebase-blog-961d6.firebaseapp.com",
    projectId: "react-firebase-blog-961d6",
    storageBucket: "react-firebase-blog-961d6.appspot.com",
    messagingSenderId: "317205414309",
    appId: "1:317205414309:web:6f6830456b61ae26bda84c"
}

firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth();
export const firestore = firebase.firestore();
