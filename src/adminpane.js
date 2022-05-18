//import { changeAccessIndividuo } from './liveonadministrator';
import { getAccountInfo } from './liveonaccount';


function AdminContent(props) {
    return (<div>
        <button onClick={() => getAccountInfo(props.cpf)}>
            ALIAS DA CONTA de CPF = {props.cpf}
        </button>
    </div>);
}

export default AdminContent;
