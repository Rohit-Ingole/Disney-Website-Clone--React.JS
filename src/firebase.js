import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi1C7fk6tXPr7sKXXYG86MZJuHhKyi2hQ",
  authDomain: "disney-598cb.firebaseapp.com",
  projectId: "disney-598cb",
  storageBucket: "disney-598cb.appspot.com",
  messagingSenderId: "274334151473",
  appId: "1:274334151473:web:f4817d3fd600913e4ff610",
  measurementId: "G-VG9JTKYDRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
