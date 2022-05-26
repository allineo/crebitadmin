import { useState } from 'react';
import { signInWithGoogle } from './backend/firebaseauth';
import './App.css';
import HomeContent from './home';

function App() {

  const [appMode, setAppMode] = useState(0);

  let phone = getUrlParameter('p');
  let cpf = getUrlParameter('cpf');
  let client = getUrlParameter('client');

  if (appMode === 'home') {
    return (
    <div>
      <LoginPane client={client} cpf={cpf} setAppMode={setAppMode} />
      <HomeContent client={client} cpf={cpf} />
      </div>);
  } else {
    return (<LoginPane client={client} cpf={cpf} setAppMode={setAppMode} />);
  }
}

export default App;


function LoginPane(props) {
  return (<div>
    <center><b>PORTAL ADMINISTRATIVO</b>
      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      <button className="login__btn login__google" onClick={signInWithGoogle(props.client, props.cpf, props.setAppMode)}>
        Login with Google
      </button>
    </center>
  </div>);
}


function getUrlParameter(urlParameterName) {
  // tslint:disable-next-line: no-conditional-assignment
  if (urlParameterName = (new RegExp('[?&]' +
    encodeURIComponent(urlParameterName) + '=([^&]*)'))
    .exec(window.location.search)) {
    return decodeURIComponent(urlParameterName[1]);
  }
}
