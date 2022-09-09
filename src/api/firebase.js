// import * as firebase from 'firebase'
import settings from './settings'
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";

const firebaseApp = initializeApp(settings);
console.log(firebaseApp.name)
// const firebaseApp = firebase.initializeApp(settings)

// export const db = firebase.database()
export const db = getFirestore(firebaseApp);
export default firebaseApp
