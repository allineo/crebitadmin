//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo } from './liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.cpf)}>
            VER NUMERO DA CONTA LIVEON<br /><b>CPF = {props.cpf}</b>
        </button>
    </div>);
}

export default AdminContent;
