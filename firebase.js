import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANfGwRPPet1BE3DeLuUXW2CYw47cWs1Ac",
  authDomain: "instagram-clone-rn-d48a0.firebaseapp.com",
  projectId: "instagram-clone-rn-d48a0",
  storageBucket: "instagram-clone-rn-d48a0.appspot.com",
  messagingSenderId: "653033274262",
  appId: "1:653033274262:web:d9045749bd5bccbb34bbb7"
};

// Initialize Firebase
!firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : firebase.app();

export const auth = firebase.auth()
export const db = firebase.firestore()

export default firebase;