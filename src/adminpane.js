//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo, getSaldo, getExtrato } from './services/liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.cpf)}>
            VER NUMERO DA CONTA LIVEON<br /><b>CPF = {props.cpf}</b>
        </button>
        <br /><br />
        <button onClick={() => getSaldo(props.cpf)}>
            SALDO
        </button> &nbsp;
        <button onClick={() => getExtrato(props.cpf)}>
            EXTRATO
        </button>
    </div>);
}

export default AdminContent;
