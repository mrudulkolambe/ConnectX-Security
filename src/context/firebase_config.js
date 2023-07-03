import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCHhuRoKfyanX1XzltGNlJqHGJ5Qx_z9zM",
  authDomain: "connectx-8b852.firebaseapp.com",
  projectId: "connectx-8b852",
  storageBucket: "connectx-8b852.appspot.com",
  messagingSenderId: "232364908988",
  appId: "1:232364908988:web:4c877915707f1a0ff58bb9"
};

const app = initializeApp(firebaseConfig, "main");
const employeeApp = initializeApp(firebaseConfig, "employee-instance");
export const auth = getAuth(app);
export const employeeAuth = getAuth(employeeApp);
export const db = getFirestore(app);
export const storage = getStorage(app);