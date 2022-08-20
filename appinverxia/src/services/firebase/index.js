import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAfYJJ5PVUKeMoHRwgwt-VUl91en0vP_58",
  authDomain: "backendinverxia.firebaseapp.com",
  projectId: "backendinverxia",
  storageBucket: "backendinverxia.appspot.com",
  messagingSenderId: "984191737998",
  appId: "1:984191737998:web:0616635d9c23d07aad69df"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
