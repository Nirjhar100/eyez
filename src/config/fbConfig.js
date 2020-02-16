import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDkJqA81scRpINtQiH8f6nistwJVD7c4KE",
    authDomain: "eyez-faec9.firebaseapp.com",
    databaseURL: "https://eyez-faec9.firebaseio.com",
    projectId: "eyez-faec9",
    storageBucket: "eyez-faec9.appspot.com",
    messagingSenderId: "392872339039",
    appId: "1:392872339039:web:80576a1a2ee822cc3f5dea",
    measurementId: "G-BBF4CVLBPC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 firebase.firestore().settings({timestampsInSnapshots:true})

 export default firebase;