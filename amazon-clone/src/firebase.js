// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCva563heR91gv1wjnYPNthKut-0sWNqSI",
  authDomain: "challenge-6c69d.firebaseapp.com",
  projectId: "challenge-6c69d",
  storageBucket: "challenge-6c69d.appspot.com",
  messagingSenderId: "671205078043",
  appId: "1:671205078043:web:1da7f9cfeabd7df6b7f4be",
  measurementId: "G-Q099W8BV4R"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

//firestoe is real time database in firebase

const auth=firebase.auth();

export {db,auth};