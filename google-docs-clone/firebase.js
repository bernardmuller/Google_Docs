import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgtNj1LkCzraaBMegnGyXCZM9a0bVQlV8",
  authDomain: "docs-clone-e1587.firebaseapp.com",
  projectId: "docs-clone-e1587",
  storageBucket: "docs-clone-e1587.appspot.com",
  messagingSenderId: "1043924310160",
  appId: "1:1043924310160:web:5c84ce332758f4b2142015",
  measurementId: "G-8103HZHC24",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
