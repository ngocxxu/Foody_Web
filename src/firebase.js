// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwZ-GU21dY7wQIttGmgVcAwpZoGok7vQk',
  authDomain: 'papzi-food.firebaseapp.com',
  projectId: 'papzi-food',
  storageBucket: 'papzi-food.appspot.com',
  messagingSenderId: '655607096389',
  appId: '1:655607096389:web:5ad8fba5daa1d1f400ef2c',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function SignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Custom Hooks
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return currentUser;
}
