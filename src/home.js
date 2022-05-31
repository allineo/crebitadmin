import DocsContent from './docs';
import CardContent from './card';
import CNPJContent from './cnpj';
import AdminContent from './adminpane';

import { createCPFIndividuo, getIndividuo, approve } from './backend/liveonIndividual';


//    /usr/share/nginx/html
//  /home/alline
//https://proxy.apps.binnovation.co/?cpf=65904249187

function HomeContent(props) {
    return (<div>
        <br />
        <div className='leftPane'>
            <br /><center><b>ONBOARDING</b></center><br />
            <OnboardingPanel client={props.client} phone={props.phone} cpf={props.cpf} />
        </div>
        <div className='rightPane'>
            <br /><center><b>MANUTENÇÃO</b></center><br />
            <AdminContent client={props.client} phone={props.phone} cpf={props.cpf} />
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
        <FixUserLink props={props} />
        <br /><br />
        <DocsContent props={props} />
        <br /><br />
        <Aprovacao props={props} />
        <br /><br /><br />
        <hr></hr>
        <CardContent props={props} />
        <hr></hr>
        <CNPJContent props={props} />
        <br /><br />
    </div>);
}


function FixUserLink(props) {
    const message = <div>
        <div id='firebaseUserDiv'>
            Usuário ID:  <br />
            Nome: <br />
            CPF: <br />
            E-mail: <br />
            Whatsapp:
        </div>
        <br /> <br />
        <button onClick={() => createCPFIndividuo(props.props.client, props.props.cpf)}>
            CRIAR INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
        </button><br />
        <br />
        - Step 0 (CPF. Retorna o individual ID) <br />
        - Step 1 (Email) <br />
        - Step 2 (Phone) <br />
        - Step 3 (Address) <br />
        - Step 4 (Profession)<br /><br />
        <div>
            <button onClick={() => getIndividuo(props.props.cpf)}>
                VER INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
            </button>
        </div>
    </div>
    return message;
}



function Aprovacao(props) {
    return (<div>
        <button onClick={() => approve(props.props.cpf)}>
            APROVAR INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
        </button>
        <br /> <br />
        * Bot envia manualmente mensagem de conta criada para o cliente:<br />
        Muito bem! Sua Conta Digital foi criada com sucesso. Em breve estará liberada para sua utilização.
        <br /> <br />

        Se a conta estiver nula,
        <a href='https://liveonsolutions.zendesk.com/hc/pt-br' target='_blank' rel='noreferrer'>
            enviar solicitação de ajuste para a Liveon.</a><br /><br />

        Após conta criada, adicionar número da conta no Firebase <br /><br />

        Enviar Mensagem Whatsapp final para o cliente:<br />
        Olá! Sua Conta Digital já está funcionando!
        Digite *c* para acessar a lista de transações financeiras disponíveis.
    </div>);
}
