import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAfRMImpKyg-O1cKuh7bg6Ia1AfTL-pkhQ",
  authDomain: "batchat-a2c35.firebaseapp.com",
  projectId: "batchat-a2c35",
  storageBucket: "batchat-a2c35.appspot.com",
  messagingSenderId: "468757779735",
  appId: "1:468757779735:web:1d590381c20ae857779352"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()