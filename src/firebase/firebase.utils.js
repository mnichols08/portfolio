import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyC2UYAuLIAIFzF5mH17r_gxU0-LqK2T9p8",
    authDomain: "mnix-dev.firebaseapp.com",
    projectId: "mnix-dev",
    storageBucket: "mnix-dev.appspot.com",
    messagingSenderId: "739467354682",
    appId: "1:739467354682:web:f9a8b75a867d8228a98b03",
    measurementId: "G-J4XD88RM63"
  };

  const app = initializeApp(config);
  const db = getFirestore(app);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  auth.languageCode = 'it';
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  provider.setCustomParameters({
    'login_hint': 'user@example.com',
    prompt: 'select_account'
  });

const createGoogleUserProfileDocument = async () => signInWithPopup(auth,provider).then((result) => {
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
  const user = result.user;
  return user
}).catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  const email = error.customData.email;
  const credential = GoogleAuthProvider.credentialFromError(error);
});

export { db, createGoogleUserProfileDocument, auth }