import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ05S8sdb18cCys7tF6v6ym42KgEmKPiw",
  authDomain: "rh-maximus-system.firebaseapp.com",
  projectId: "rh-maximus-system",
  storageBucket: "rh-maximus-system.firebasestorage.app",
  messagingSenderId: "636414554510",
  appId: "1:636414554510:web:ecbe495ed8211d90dbf4df"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore (Banco de Dados) e EXPORTA ele como 'db'
export const db = getFirestore(app);
