import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB54q8FXxCRcWxLCz1sS8Gplk3MpSJhJJM",
  authDomain: "miniblog-70141.firebaseapp.com",
  projectId: "miniblog-70141",
  storageBucket: "miniblog-70141.appspot.com",
  messagingSenderId: "933076127254",
  appId: "1:933076127254:web:4deaed103e37fb979a6f37",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
