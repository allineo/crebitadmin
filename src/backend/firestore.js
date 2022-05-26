import { collection, getDocs, query, where } from 'firebase/firestore';

//https://console.cloud.google.com/firestore/import-export?project=rr4x-b8540&supportedpurview=project

let db = null;


export const getUser = async function (db, projectName, cpf) {
  let id = '';
  const baselink = 'https://console.firebase.google.com/u/0/project/' +
    projectName + '/firestore/data/~2Fusers~2F';

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