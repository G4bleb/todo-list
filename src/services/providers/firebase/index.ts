import { firebaseConfig } from "./config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
