import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

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
  let id = '';
  const colRef = collection(db, "users");
  const q = query(colRef, where("cpf", "==", cpf));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    let user = doc.data();
    console.log(doc.id, " => ", user);
    id = doc.id;

    document.getElementById('firebaseUserDiv').innerHTML =
      //'Usuário ID: ' + user['id'] + '<br />' +
      'Nome: <b>' + user['nome'] + '</b> (Digitar o nome completo no Firestore de acordo com o documento)<br />' +
      'CPF: <b>' + user['cpf'] + '</b> (Conferir no Firestore de acordo com o documento) <br />' +
      'Whatsapp: <b>' + user['telefone'] + '</b>';

    const baselink = 'https://console.firebase.google.com/u/0/project/rr4x-b8540/firestore/data/~2Fusers~2F';
    document.getElementById('firebaseLinkDiv').innerHTML =
      'Link: <a href=' + baselink + id +
      ' target="_blank" rel="noreferrer">Valide os dados aqui </a>';
  });

  return id;
}

