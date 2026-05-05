import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// ⚠️ ATENÇÃO: Estas credenciais ficam visíveis no código do cliente (browser).
// Isso é NORMAL para Firebase Web — a segurança é feita pelas REGRAS DO FIRESTORE.
// NUNCA coloque chaves de servidor (Admin SDK) aqui.
//
// Se trocar de projeto Firebase, atualize todos os campos abaixo.
const firebaseConfig = {
  apiKey:            "AIzaSyAYLJ4-Gt-FZ0zU6Xp9Lx-UhrGGhGNTp8",  // ← corrigido (39 chars)
  authDomain:        "gp-maximus.firebaseapp.com",
  projectId:         "gp-maximus",
  storageBucket:     "gp-maximus.firebasestorage.app",
  messagingSenderId: "975233569379",
  appId:             "1:975233569379:web:0356e1af46d1f0aa1f9e56",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
