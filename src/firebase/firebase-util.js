// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/firestore";
// import "firebase/auth";

const fireBaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCC1CQj5IRNMS8tb12t_hXioQw-RpWVH3M",
  authDomain: "kai-ecommerce.firebaseapp.com",
  databaseURL:
    "https://kai-ecommerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kai-ecommerce",
  storageBucket: "kai-ecommerce.appspot.com",
  messagingSenderId: "408777995830",
  appId: "1:408777995830:web:36d8e2e4fbeb322b394a97",
});

const auth = fireBaseConfig.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const dataBase = fireBaseConfig.firestore;
const storage = fireBaseConfig.storage;

export { auth, fireBaseConfig, provider, dataBase, storage };
