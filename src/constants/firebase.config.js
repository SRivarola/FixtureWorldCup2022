import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCa_EBpmJ8_fLQq65oMLzlKBt7vkC_dfFo",
  authDomain: "fixture2022-8c7f5.firebaseapp.com",
  projectId: "fixture2022-8c7f5",
  storageBucket: "fixture2022-8c7f5.appspot.com",
  messagingSenderId: "604325191115",
  appId: "1:604325191115:web:f27c6f88a0dc2e19e96a4e"
};
  

  const firebaseApp = initializeApp(firebaseConfig);
  export const db = getFirestore(firebaseApp);
  export const auth = getAuth(firebaseApp);
  // export const storage = getStorage(firebaseApp)