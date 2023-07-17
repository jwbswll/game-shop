// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBhHokbar6wb-iR6xP5gZylMJlzFkTSOnQ",
	authDomain: "e-commerce-store-33889.firebaseapp.com",
	projectId: "e-commerce-store-33889",
	storageBucket: "e-commerce-store-33889.appspot.com",
	messagingSenderId: "8385268243",
	appId: "1:8385268243:web:9f15e987bc888d3429cde6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
