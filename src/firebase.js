import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️ ATENÇÃO: Estas credenciais ficam visíveis no código do cliente (browser).
// Isso é NORMAL para Firebase Web — a segurança é feita pelas REGRAS DO FIRESTORE.
// NUNCA coloque chaves de servidor (Admin SDK) aqui.
//
// Se trocar de projeto Firebase, atualize todos os campos abaixo.
const firebaseConfig = {
  apiKey: "AIzaSyAZO5SBsdb18eCys7tF6v6ym42KgEmKPiw",
  authDomain: "rh-maximus-system.firebaseapp.com",
  projectId: "rh-maximus-system",
  storageBucket: "rh-maximus-system.firebasestorage.app",
  messagingSenderId: "636414554510",
  appId: "1:636414554510:web:ecbe495ed8211d90dbf4df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
