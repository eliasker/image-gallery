import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg7MpVukB7jQHvXstZfugdjPxvMpPEKYE",
  authDomain: "image-gallery-fb78b.firebaseapp.com",
  databaseURL: "https://image-gallery-fb78b.firebaseio.com",
  projectId: "image-gallery-fb78b",
  storageBucket: "image-gallery-fb78b.appspot.com",
  messagingSenderId: "574836681574",
  appId: "1:574836681574:web:5aac97107bf7367fe1f6a7",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const imageStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { imageStorage, projectFirestore };
