
import { activateCard, listCards } from './backend/liveonaccount';

function CardContent(props) {
    return (<div>
        <b>CARTÃO</b>:<br />
        <br />
        1. Embossar o cartao do cliente (Alline)<br />
        <br />
        2. Entregar o cartao para o cliente<br /><br />

        3. Número do Cartão: <input type='text' id='card'></input> &nbsp;
        <button onClick={() => activateCard(props.props.cpf)}>
            ATIVAR CARTÃO
        </button> &nbsp; &nbsp;
        <button onClick={() => listCards(props.props.cpf)}>
            LISTAR CARTÕES
        </button>
        <br /><br />
        4. Enviar SMS de senha para o cliente<br />

    </div>);
}

export default CardContent;