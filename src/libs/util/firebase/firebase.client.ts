import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectID: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appID: process.env.NEXT_PUBLIC_APP_ID,
  measurmentId: process.env.NEXT_PUBLIC_MEASURMENT_ID,
};

// initialise firebase
let app: FirebaseApp;

export const initialiseFirebase = (): FirebaseApp => {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  }
  return app;
};

app = initialiseFirebase();

export const dbClient = getFirestore();
export const authClient = getAuth();