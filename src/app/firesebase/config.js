import 'dotenv/config';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: String(process.env.NEXT_PUBLIC_apiKey),
  authDomain: String(process.env.NEXT_PUBLIC_authDomain),
  projectId: String(process.env.NEXT_PUBLIC_projectId),
  storageBucket: String(process.env.NEXT_PUBLIC_storageBucket),
  messagingSenderId: String(process.env.NEXT_PUBLIC_messagingSenderId),
  appId: String(process.env.NEXT_PUBLIC_appId),
  measurementId: String(process.env.NEXT_PUBLIC_measurementId),
};

// Inicializar Firebase solo si estamos en el entorno del navegador
const app = initializeApp(firebaseConfig);
let analytics;

if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export const db = getFirestore(app);
