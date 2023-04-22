import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {

  apiKey: "AIzaSyC_kmU-mvdQ1o2IivNie7ySceXg5_CDWJ4",
  authDomain: "disneyclone-99120.firebaseapp.com",
  projectId: "disneyclone-99120",
  storageBucket: "disneyclone-99120.appspot.com",
  messagingSenderId: "792197554569",
  appId: "1:792197554569:web:4b8ab6189bd89ccea70158",
  measurementId: "G-69ZH2SZCPT"

};

const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export{auth, provider, storage};
export default db;
