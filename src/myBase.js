import firebase from "firebase/compat/app"
import "firebase/compat/auth";


const firebaseConfig = {
    apiKey: "AIzaSyC79EK0xjqi1Q6af4IDBBDAjz4L_UXxvhc",
    authDomain: "twitter-1089d.firebaseapp.com",
    projectId: "twitter-1089d",
    storageBucket: "twitter-1089d.appspot.com",
    messagingSenderId: 696277090660,
    appId: "1:696277090660:web:856388ee97e77b1da57a71"
  }; 

export const firebaseInstance = firebase;


firebase.initializeApp(firebaseConfig);


export const authService = firebase.auth();