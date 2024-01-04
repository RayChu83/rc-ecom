import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDp2vzTqWM65GoHzIwkZCbI1LM71GT6cZk",
  authDomain: "ecom-project-97265.firebaseapp.com",
  projectId: "ecom-project-97265",
  storageBucket: "ecom-project-97265.appspot.com",
  messagingSenderId: "356272187052",
  appId: "1:356272187052:web:b504142993ec046b8fa109"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
