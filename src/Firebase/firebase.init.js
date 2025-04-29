
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR0z0f7OjB8dEnv7RLbGhQCLm7z7_AudI",
  authDomain: "auth-integration-2d011.firebaseapp.com",
  projectId: "auth-integration-2d011",
  storageBucket: "auth-integration-2d011.firebasestorage.app",
  messagingSenderId: "498007598203",
  appId: "1:498007598203:web:f4af06fc03d9362dabaede"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);