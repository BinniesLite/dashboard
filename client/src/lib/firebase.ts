import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import 'firebase/auth';

const firebaseConfig = {
  // Vite using a different environmental variable
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_SECRET,
  authDomain: "spider-dashboard.firebaseapp.com",
  projectId: "spider-dashboard",
  storageBucket: "spider-dashboard.appspot.com",
  messagingSenderId: "840966774459",
  appId: import.meta.env.VITE_FIREBASE_API_APP_ID,
  measurementId: "G-1MJ8NFRQZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// TODO: Add Authentication function for firebase, google and facebook
