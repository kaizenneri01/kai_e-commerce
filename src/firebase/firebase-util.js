import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

export const config = {
  apiKey: "AIzaSyA8cRMJpLQOPn12H9kxccC-EiZ24_A-izA",
  authDomain: "kaizen-ecommerce-fcfa5.firebaseapp.com",
  projectId: "kaizen-ecommerce-fcfa5",
  storageBucket: "kaizen-ecommerce-fcfa5.appspot.com",
  messagingSenderId: "1022806704503",
  appId: "1:1022806704503:web:f0a3b78019b90be56d6172",
  measurementId: "G-0R4HMDFLS1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
