import './App.css';
import { getUsers }  from './firestore';
import HomeContent from './home';

function App() {

  const client = 'RR4X';
  let phone = getUrlParameter('p');

  //getUsers();

  return (<div>
    <b>PORTAL ADMINISTRATIVO</b> <br /><br /><br />
    <HomeContent client={client} phone={phone} />
  </div>);
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
