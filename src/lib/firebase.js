import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {    
    apiKey: "AIzaSyDgxu_Ezvn8WBXT8UI-R4XnqhP47PPPxpE",
    authDomain: "photos-227fe.firebaseapp.com",
    projectId: "photos-227fe",
    storageBucket: "photos-227fe.appspot.com",
    messagingSenderId: "593910643863",
    appId: "1:593910643863:web:80fff1a6b6b5dd2a6b3dd2"
};

const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore;


console.log('firebase:', firebase)
export {firebase, FieldValue};

