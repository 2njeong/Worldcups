// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBARES_API_KEY,
  authDomain: process.env.REACT_APP_FIREBARES_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBARES_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBARES_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBARES_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBARES_APP_ID,
  measurementId: process.env.REACT_APP_FIREBARES_MEASUERMENT_ID
};

console.log('apiKey', process.env.REACT_APP_FIREBARES_API_KEY);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
