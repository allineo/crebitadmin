import './App.css';
import { getUser } from './firestore';
import HomeContent from './home';
import AdminContent from './adminpane';

function App() {

  const client = 'RR4X';
  let phone = getUrlParameter('p');
  let cpf = getUrlParameter('cpf');

  let userid = getUser(cpf);
  console.log('userid ' + userid);

  return (<div>
    <div className='leftPane'>
      <b>PORTAL ADMINISTRATIVO</b> <br /><br /><br />
      <HomeContent client={client} phone={phone} cpf={cpf} />
    </div>
    <div className='rightPane'>
      <AdminContent client={client} phone={phone} cpf={cpf} />
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
