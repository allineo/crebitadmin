import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where  } from 'firebase/firestore';

//https://console.cloud.google.com/firestore/import-export?project=rr4x-b8540&supportedpurview=project

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


export const getUser = async function (cpf) {
    let id = 'asd';
    const colRef = collection(db, "users");
    const q = query(colRef, where("cpf", "==", cpf));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      id = doc.id;
    });

    return id;
}

