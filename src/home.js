import { useState } from 'react';
import CPFContent from './cpf';
import CNPJContent from './cnpj';
import CardContent from './card';
import AdminContent from './adminpane';


function HomeContent(props) {

    const [HomeMode, setHomeMode] = useState(0);
    
    return (<div>
        <br />
        <div className='leftPane'>
            <br /><center><b>ONBOARDING</b></center><br />
            <OnboardingPanel client={props.client} cpf={props.cpf}
                HomeMode={HomeMode} setHomeMode={setHomeMode} />
        </div>
        <div className='rightPane'>
            <br /><center><b>MANUTENÇÃO</b></center><br />
            <AdminContent client={props.client} cpf={props.cpf} />
            <br />
            <hr></hr>
            <br />
            Resposta:
            <br /><br />
            <div id='resposta'>aqui</div>
        </div>
    </div>);
}

export default HomeContent;

function OnboardingPanel(props) {
    return (<div>
        <UserData />
        <br />
        <Registro props={props} />
        <br /><br /><br />
        <hr></hr>
        <CardContent props={props} />
        <br /><br />
    </div>);
}


function UserData() {
    const message = <div>
        <div id='firebaseUserDiv'>
            Usuário ID:  <br />
            Nome: <br />
            CPF: <br />
            E-mail: <br />
            Whatsapp:
        </div>
        <br /> <br />
    </div>
    return message;
}

function Registro(props) {
    if ((props.props.cpf !== null) && (props.props.cpf !== undefined) && (props.props.cpf).length === 14) {
        return (<CNPJContent client={props.props.client} cpf={props.props.cpf} />);
    } else {
        return (<CPFContent client={props.props.client} cpf={props.props.cpf} />);
    }
}