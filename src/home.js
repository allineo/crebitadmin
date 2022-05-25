import DocsContent from './docs';
import { createCPFIndividuo, getIndividuo, approve } from './backend/liveonIndividual';


//    /usr/share/nginx/html
//  /home/alline
//https://proxy.apps.binnovation.co/?cpf=65904249187

function HomeContent(props) {
    return (<div>
        <FixUserLink props={props} />
        <br /><br />
        <DocsContent props={props} />
        <br /><br />
        <Aprovacao props={props} />
        <br /><br /><br />
    </div>);
}

export default HomeContent;


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
            <button onClick={() => getIndividuo(props.props.client, props.props.cpf)}>
                VER INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
            </button>
        </div>
    </div>
    return message;
}



function Aprovacao(props) {
    return (<div>
        <button onClick={() => approve(props.props.client, props.props.cpf)}>
            APROVAR INDIVIDUO LIVEON<br /><b>CPF = {props.props.cpf}</b>
        </button>
        <br /> <br />
        * Bot envia manualmente mensagem de conta criada para o cliente:<br />
        Muito bem! Sua Conta Digital foi criada com sucesso. Em breve estará liberada para sua utilização.
        <br /> <br />

        Adicionar Alias Account da Liveon no Firebase <br /><br />

        Enviar Mensagem Whatsapp final para o cliente:<br />
        Olá! Sua Conta Digital já está funcionando!
        Digite *c* para acessar a lista de transações financeiras disponíveis.

        <br /><br /> 
        <hr></hr>
        <br />

        <b>CARTÃO</b>:<br />
        <br />
        Embossar o cartao do cliente<br />
        <br />
        Pegar o numero completo do cartao do cliente<br />
        Entregar o cartao para o cliente<br />
        Associar o numero do cartao do cliente ao id do individuo<br />
        Criar a senha do cliente<br />
    </div>);
}
