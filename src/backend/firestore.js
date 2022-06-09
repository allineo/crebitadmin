import { collection, getDocs, query, where } from 'firebase/firestore';


export const getUser = async function (db, projectName, cpf) {
  let user = null;
  const colRef = collection(db, "users");
  const q = query(colRef, where("cpf", "==", cpf));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    user = doc.data();
    console.log(doc.id, " => ", user);
    fillForms(user, projectName);
  });
  return user;
}

function fillForms(user, projectName) {
  const baselink = 'https://console.firebase.google.com/u/0/project/' +
    projectName + '/firestore/data/~2Fusers~2F';

  document.getElementById('firebaseUserDiv').innerHTML =
  'Nome: <b><span id=nomeuser>' + user['nome'] + '</span></b> (Digitar o nome completo no Firestore de acordo com o documento)<br />' +
  'CPF: <b>' + user['cpf'] + '</b> (Conferir no Firestore de acordo com o documento) <br />' +
  'E-mail: <b>' + user['email'] + '</b><br />' +
  'Whatsapp: <b>' + user['telefone'] + '</b><br />' +
  'Liveon Individuo ID: <b><span id=liveonid>' + user['liveon']['individual_id'] + '</span></b><br />' +
  'Liveon Account Number: <b>' + user['liveon']['account_number'] + '</b><br /><br />' +
  'Link: <a href=' + baselink + user['id'] +
  ' target="_blank" rel="noreferrer">Valide os dados do Firestore aqui </a>';

  if (user['cpf'].length === 14) {
    document.getElementById('emailempresa').value = user['email'];
    document.getElementById('cnpj').value = user['cpf'];
    document.getElementById('cepempresa').value = user['endereco']['cep'];
    document.getElementById('ruaempresa').value = user['endereco']['logradouro'];
    document.getElementById('numempresa').value = user['endereco']['numero'];
    document.getElementById('bairroempresa').value = user['endereco']['bairro'];
    document.getElementById('cidadeempresa').value = user['endereco']['localidade'];
    document.getElementById('estadoempresa').value = user['endereco']['uf'];

    let phoneNumber = (user['telefone']).substring(4);
    phoneNumber = (phoneNumber.length < 9)? '9' + phoneNumber: phoneNumber;
    document.getElementById('dddempresa').value = (user['telefone']).substring(2, 4);
    document.getElementById('phoneempresa').value = phoneNumber;
  }
}