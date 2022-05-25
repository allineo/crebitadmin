import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

//https://console.cloud.google.com/firestore/import-export?project=rr4x-b8540&supportedpurview=project

let db = null;


export const getUser = async function (client, cpf) {
  initDB(client);
  let id = '';
  const project = getConfig(client).projectName;
  const baselink = 'https://console.firebase.google.com/u/0/project/' +
    project + '/firestore/data/~2Fusers~2F';

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
      'E-mail: <b>' + user['email'] + '</b><br />' +
      'Whatsapp: <b>' + user['telefone'] + '</b><br />' +
      'Liveon Individuo ID: <b>' + user['liveon']['individual_id'] + '</b><br />' +
      'Liveon Account Number: <b>' + user['liveon']['account_number'] + '</b><br /><br />' +
      'Link: <a href=' + baselink + id +
      ' target="_blank" rel="noreferrer">Valide os dados do Firestore aqui </a>';
  });
  return id;
}

function getConfig(client) {
  let firebaseConfig = {
    "projectName": "crebitbot",
    "apiKey": "AIzaSyDjjlPT9eNsBfSU3elUEG3Ma8mNqrQovPw",
    "authDomain": "crebitbot.firebaseapp.com",
    "projectId": "crebitbot",
    "storageBucket": "crebitbot.appspot.com",
    "messagingSenderId": "831018541149",
    "appId": "1:831018541149:web:808a236e4a47949b6cedb4"
  };
  switch (client) {
    case 'RR4X':
      firebaseConfig = {
        "projectName": "rr4x-b8540",
        "apiKey": "AIzaSyBOirtqREBSorZj55DFEPqnWxbWKaAJ2x4",
        "authDomain": "rr4x-b8540.firebaseapp.com",
        "projectId": "rr4x-b8540",
        "storageBucket": "rr4x-b8540.appspot.com",
        "messagingSenderId": "890848064177",
        "appId": "1:890848064177:web:7fca39d9723a347cbda890"
      };
      break;
    case '72Bank':
      firebaseConfig = {
        "projectName": "bank-ff5c7",
        "apiKey": "AIzaSyAWQFDESFwCD1WgC84_L25py_vn1-DhrNc",
        "authDomain": "bank-ff5c7.firebaseapp.com",
        "projectId": "bank-ff5c7",
        "storageBucket": "bank-ff5c7.appspot.com",
        "messagingSenderId": "464807858968",
        "appId": "1:464807858968:web:774b10250517f44051046d"
      };
      break;
    default:
      break;
  }
  return firebaseConfig;
}

function initDB(client) {
  if (db == null) {
    const app = initializeApp(getConfig(client));
    db = getFirestore(app);
  }
}
