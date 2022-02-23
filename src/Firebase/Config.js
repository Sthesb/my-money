import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyAJAg3yIJQMVadEwCfAsp-5pPb_eHTfu80",
    authDomain: "my-money-3d41a.firebaseapp.com",
    projectId: "my-money-3d41a",
    storageBucket: "my-money-3d41a.appspot.com",
    messagingSenderId: "747845113900",
    appId: "1:747845113900:web:552a548dd064d0ce9cd989"
  };

// init firebase 
// initialize firebase
firebase.initializeApp(firebaseConfig)

// initialize firestore
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
