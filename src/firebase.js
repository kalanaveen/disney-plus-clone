import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmLTOmsYP44oZKWuj0auGb4XvYRYu9mjg",
    authDomain: "disney-clone-c3744.firebaseapp.com",
    projectId: "disney-clone-c3744",
    storageBucket: "disney-clone-c3744.appspot.com",
    messagingSenderId: "761753879915",
    appId: "1:761753879915:web:9571d64b844f674abff82e",
    measurementId: "G-P5SR8KV675"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export{ auth,provider,storage };
  export default db;