import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7qPJoGAVi3TZqy9NbWL1q4MHdvDsmsPQ",
  authDomain: "disney-website-clone.firebaseapp.com",
  projectId: "disney-website-clone",
  storageBucket: "disney-website-clone.appspot.com",
  messagingSenderId: "1059248489212",
  appId: "1:1059248489212:web:8ba13fc590d5010367cd79",
  measurementId: "G-8VK7KL0GPX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
