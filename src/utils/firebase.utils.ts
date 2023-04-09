import { initializeApp } from 'firebase/app';
import { getAuth, 
        signInWithEmailAndPassword, 
        signInWithPopup,
        signInWithRedirect,
        signInWithPhoneNumber,
        signInWithEmailLink, 
        GoogleAuthProvider} from'firebase/auth';

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfUQ_dlGxCLmoFkrjNggbpW0fcku2BFwQ",
  authDomain: "soleil-motors.firebaseapp.com",
  projectId: "soleil-motors",
  storageBucket: "soleil-motors.appspot.com",
  messagingSenderId: "415596934648",
  appId: "1:415596934648:web:af5f6414330893e06d120d",
  measurementId: "G-1P6G6SS92S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ 
    prompt: 'select_account' 
  });
  try {
    const result = await signInWithPopup(auth ,provider);
    return result.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const provider = await signInWithEmailAndPassword(auth, email, password);
    return provider.user;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (error) {
    console.error(error);
  }
};
