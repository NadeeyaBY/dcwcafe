import firebase from 'firebase';
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDS1qO3P1DWnaa2gfcnpxrNEvlr_Zro7js",
    authDomain: "dcw-app-1449e.firebaseapp.com",
    projectId: "dcw-app-1449e",
    storageBucket: "dcw-app-1449e.appspot.com",
    messagingSenderId: "15625201546",
    appId: "1:15625201546:web:778a428c6b218cb08f0a73",
    measurementId: "G-1L22QPXBXR"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebaseConfig;