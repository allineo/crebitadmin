//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo } from './backend/liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.client, props.cpf)}>
            VER NUMERO DA CONTA LIVEON<br /><b>CPF = {props.cpf}</b>
        </button>
    </div>);
}

export default AdminContent;
