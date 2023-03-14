import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


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

  export { db }