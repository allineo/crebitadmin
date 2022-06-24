
import DocsContent from './docs';
import { createCPFIndividuo, getIndividuo, approve } from './services/liveonIndividual';



function CPFContent(props) {
    return (<div>
        <button onClick={() => createCPFIndividuo(props.client, props.cpf)}>
            CRIAR INDIVIDUO LIVEON<br /><b>CPF = {props.cpf}</b>
        </button><br />
        <br />
        - Step 0 (CPF. Retorna o individual ID) <br />
        - Step 1 (Email) <br />
        - Step 2 (Phone) <br />
        - Step 3 (Address) <br />
        - Step 4 (Profession)<br /><br />
        <div>
            <button onClick={() => getIndividuo(props.cpf)}>
                VER INDIVIDUO LIVEON<br /><b>CPF = {props.cpf}</b>
            </button>
        </div>
        <br /><br />
        <DocsContent props={props} />
        <br /><br />
        <Aprovacao props={props} />
    </div>);
}

export default CPFContent;


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
