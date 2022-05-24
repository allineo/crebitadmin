import './App.css';
import { getUser } from './firestore';
import HomeContent from './home';
import AdminContent from './adminpane';

function App() {

  let phone = getUrlParameter('p');
  let cpf = getUrlParameter('cpf');
  let client = getUrlParameter('client');

  let userid = getUser(client, cpf);
  //console.log('userid ' + userid);

  return (<div>
    <center><b>PORTAL ADMINISTRATIVO</b></center>
    <br />
    <div className='leftPane'>
      <br /><center><b>ONBOARDING</b></center><br />
      <HomeContent client={client} phone={phone} cpf={cpf} />
    </div>
    <div className='rightPane'>
      <br /><center><b>MANUTENÇÃO</b></center><br />
      <AdminContent client={client} phone={phone} cpf={cpf} />
      <br />
      <hr></hr>
      <br />
        Resposta:
        <br /><br />
        <div id='resposta'>aqui</div>
    </div>
  </div>
  );
}

export default App;


function getUrlParameter(urlParameterName) {
  // tslint:disable-next-line: no-conditional-assignment
  if (urlParameterName = (new RegExp('[?&]' +
    encodeURIComponent(urlParameterName) + '=([^&]*)'))
    .exec(window.location.search)) {
    return decodeURIComponent(urlParameterName[1]);
  }
}
