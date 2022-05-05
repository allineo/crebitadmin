import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOirtqREBSorZj55DFEPqnWxbWKaAJ2x4",
    authDomain: "rr4x-b8540.firebaseapp.com",
    projectId: "rr4x-b8540",
    storageBucket: "rr4x-b8540.appspot.com",
    messagingSenderId: "890848064177",
    appId: "1:890848064177:web:7fca39d9723a347cbda890"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//exports.getUsers = async function (db) {
async function getUsers(db) {
    const usersol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    console.log(usersList);
    //console.log(usersList['nome']);
    return usersList;
  }

  getUsers(db);