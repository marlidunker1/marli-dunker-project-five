import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDzUfFbAknCUnUvo5kAaB3K9HLmLiGef2s",
    authDomain: "marli-dunker-project-five.firebaseapp.com",
    databaseURL: "https://marli-dunker-project-five.firebaseio.com",
    projectId: "marli-dunker-project-five",
    storageBucket: "",
    messagingSenderId: "483024063313",
    appId: "1:483024063313:web:b5ce4f11dcb02920c72170"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase; 