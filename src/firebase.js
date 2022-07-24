// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword
} from 'firebase/auth';
import { useEffect, useState } from 'react';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6R9D7-FKezham0ONOwe3ErddMZP-99Uo",
  authDomain: "papzi-foody.firebaseapp.com",
  projectId: "papzi-foody",
  storageBucket: "papzi-foody.appspot.com",
  messagingSenderId: "796856700065",
  appId: "1:796856700065:web:b2655f1b96b05efb3874e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getDatabase(app);
export const dbFs = getFirestore(app);

// Handle Login by Google
const authGoogle = getAuth(app);
const provider = new GoogleAuthProvider();
export const handleGoogleSignIn = () => {
  signInWithPopup(authGoogle, provider)
    .then((result) => {
      if (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

// Handle Login by Facebook
const authFacebook = getAuth(app);
export const handleFacebookSignIn = () => {
  const provider = new FacebookAuthProvider();
  signInWithPopup(authFacebook, provider)
    .then((result) => {
      if (result) {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = FacebookAuthProvider.credentialFromError(error);

      // ...
    });
};

export function SignUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function SignIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function SignOut() {
  signOut(auth);
}

export function ResetPassword(email) {
  return sendPasswordResetEmail(auth, email);
}

export function UpdatePassword(password) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return updatePassword(currentUser, password);
}

export function UpdateEmail(email) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);

  return updatePassword(currentUser, email);
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