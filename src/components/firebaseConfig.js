import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsEoH4q0q0xhRq-hkSAFmZh0iEja8m6zI",
  authDomain: "nutrifridge.firebaseapp.com",
  projectId: "nutrifridge",
  storageBucket: "nutrifridge.appspot.com",
  messagingSenderId: "781974439841",
  appId: "1:781974439841:web:fbe223ba0295a500cf2de0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;