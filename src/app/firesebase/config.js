import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyClRjLCP6pqrfhmm2wtJGuB4zpVeMg1GsQ",
  authDomain: "web-personal-23d6d.firebaseapp.com",
  projectId: "web-personal-23d6d",
  storageBucket: "web-personal-23d6d.appspot.com",
  messagingSenderId: "869750999066",
  appId: "1:869750999066:web:3cb6d434d56caf9da629a3",
  measurementId: "G-3YDVF3CS5Y"
};

// Inicializar Firebase solo si estamos en el entorno del navegador
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);