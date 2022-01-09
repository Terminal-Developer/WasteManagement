// import * as firebase from 'firebase';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiZ85l7kFpMcwC3Flhndd3CbaxDwGWY_8",
  authDomain: "waste-management-26888.firebaseapp.com",
  projectId: "waste-management-26888",
  storageBucket: "waste-management-26888.appspot.com",
  messagingSenderId: "238200007759",
  appId: "1:238200007759:web:02372eb50663913d420e3a"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
