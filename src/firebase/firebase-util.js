import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const fireBaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCC1CQj5IRNMS8tb12t_hXioQw-RpWVH3M",
  authDomain: "kai-ecommerce.firebaseapp.com",
  databaseURL:
    "https://kai-ecommerce-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kai-ecommerce",
  storageBucket: "kai-ecommerce.appspot.com",
  messagingSenderId: "408777995830",
  appId: "1:408777995830:web:f66e37c0b27a72a4394a97",
});

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creatin user", error.message);
    }
  }

  return userRef;
};

const auth = fireBaseConfig.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const firestore = fireBaseConfig.firestore();
const storage = fireBaseConfig.storage;

export {
  auth,
  fireBaseConfig,
  provider,
  firestore,
  storage,
  createUserProfileDocument,
};
