import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD61C30NxWwX_JGCIbL_VRnZgATqIzVz4E",
  authDomain: "netflix-clone-31304.firebaseapp.com",
  databaseURL: "https://netflix-clone-31304-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-31304",
  storageBucket: "netflix-clone-31304.appspot.com",
  messagingSenderId: "157708374739",
  appId: "1:157708374739:web:a75e51b6f8d9f280173a26"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;