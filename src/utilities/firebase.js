import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyABJePhxxo3W52UUKzzkcI6B3MxM__7294",
    authDomain: "fire-todo-list-2a94b.firebaseapp.com",
    projectId: "fire-todo-list-2a94b",
    storageBucket: "fire-todo-list-2a94b.appspot.com",
    messagingSenderId: "467882020049",
    appId: "1:467882020049:web:46d17cbd94f8caff0809f0"
  };

firebase.initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;